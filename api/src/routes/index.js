import * as archiver from "archiver";
import * as html_to_pdf from "html-pdf";
import * as fs from "fs";
import * as Handlebars from "handlebars";

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render('index', { title: 'Express' });

    console.log(req.data.category);

    var category = req.data.category;
    var file = req.data.file;

    // translate csv to json/array
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        const text = e.target.result;
        const data = csvToArray(text);
        generate_pdf(data, category);
    };
});

var category_dict = {
    wedding: {
        photo: "https://images.pexels.com/photos/3998368/pexels-photo-3998368.png?",
        color1: "white",
        color2: "white",
    },
    concert: {
        photo: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
        color1: "whitesmoke",
        color2: "white",
    },
    birthday: {
        photo: "https://images.pexels.com/photos/4397908/pexels-photo-4397908.jpeg?",
        color1: "white",
        color2: "white",
    },
    party: {
        photo: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?",
        color1: "white",
        color2: "white",
    },
};

function generate_pdf(names_array, category) {
    var source = fs.readFileSync(
        __dirname + "/../../src/views/layout.hbs",
        "utf8"
    );
    let options = {
        format: "A5",
        type: "pdf",
        orientation: "landscape",
        border: "0",
    };

    var template = Handlebars.compile(source);

    names_array.forEach((person, idx) => {
        var data = { category, person, ...category_dict[category] };

        var result = template(data);

        html_to_pdf
            .create(result, options)
            .toFile(
                "temp_folder/" + person + "_" + idx + ".pdf",
                function (err, res) {
                    if (err) return console.log(err);
                    console.log(res);
                }
            );
    });

    var archive = archiver("zip");
    var output = fs.createWriteStream("download.zip");

    output.on("close", function () {
        console.log(archive.pointer() + " total bytes");
        console.log(
            "archiver has been finalized and the output file descriptor has closed."
        );
    });

    archive.on("error", function (err) {
        throw err;
    });

    archive.pipe(output);

    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory(source_dir, false);

    // append files from a sub-directory and naming it `new-subdir` within the archive
    archive.directory("../temp_folder/", "zipped");

    archive.finalize();
}

function csvToArray(str, delimiter = ",") {
    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
            object[header] = values[index];
            return object;
        }, {});
        return el;
    });

    return arr;
}

module.exports = router;

// My code

console.log(__dirname + "../views/layout.hbs");

var source = fs.readFileSync(__dirname + "/../../src/views/layout.hbs", "utf8");

let options = {
    format: "A5",
    type: "pdf",
    orientation: "landscape",
    border: "0",
};

var template = Handlebars.compile(source);

// var data = {
//     category: "wedding",
//     person: "Monika Kwiecien",
//     photo: "https://images.pexels.com/photos/3998368/pexels-photo-3998368.png?",
//     color1: "white",
//     color2: "white",
// };

// var data = {
//     category: "concert",
//     person: "Robert Kwiecien",
//     photo: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
//     color1: "whitesmoke",
//     color2: "white",
// };

// var data = {
//     category: "birthday",
//     person: "Mateusz Kwiecien",
//     photo: "https://images.pexels.com/photos/4397908/pexels-photo-4397908.jpeg?",
//     color1: "whitesmoke",
//     color2: "white",
// };

// var data = {
//     category: "party", //category
//     person: "Julia Kwiecien", // names[i]
//     photo: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?", //category-image
//     color1: "white", //category-color1
//     color2: "white", //category-color2
// };

var result = template(data);

html_to_pdf.create(result, options).toFile("test.pdf", function (err, res) {
    if (err) return console.log(err);
    console.log(res);
});
