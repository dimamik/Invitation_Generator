"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var html_to_pdf = _interopRequireWildcard(require("html-pdf"));

var fs = _interopRequireWildcard(require("fs"));

var Handlebars = _interopRequireWildcard(require("handlebars"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var express = require("express");

var router = express.Router();
/* GET home page. */

router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.data.category);
  var category = req.data.category;
  var file = req.data.file; // translate csv to json/array
});
var category_dict = {
  wedding: {
    photo: "https://images.pexels.com/photos/3998368/pexels-photo-3998368.png?",
    color1: "white",
    color2: "white"
  },
  concert: {
    photo: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    color1: "whitesmoke",
    color2: "white"
  },
  birthday: {
    photo: "https://images.pexels.com/photos/4397908/pexels-photo-4397908.jpeg?",
    color1: "black",
    color2: "white"
  },
  party: {
    photo: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?",
    color1: "black",
    color2: "white"
  }
};

function fenerate_pdf(names_array, category) {
  for (var person in names_array) {
    var data = {
      ca: ca
    };
  }
}

module.exports = router; // My code

console.log(__dirname + "../views/layout.hbs");
var source = fs.readFileSync(__dirname + "/../../src/views/layout.hbs", "utf8");
var options = {
  format: "A5",
  type: "pdf",
  orientation: "landscape",
  border: "0"
};
var template = Handlebars.compile(source);
var data = {
  category: "wedding",
  person: "Monika Kwiecien",
  photo: "https://images.pexels.com/photos/3998368/pexels-photo-3998368.png?",
  color1: "white",
  color2: "white"
};
var data = {
  category: "concert",
  person: "Robert Kwiecien",
  photo: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
  color1: "whitesmoke",
  color2: "white"
};
var data = {
  category: "birthday",
  person: "Mateusz Kwiecien",
  photo: "https://images.pexels.com/photos/4397908/pexels-photo-4397908.jpeg?",
  color1: "whitesmoke",
  color2: "white"
};
var data = {
  category: "party",
  //category
  person: "Julia Kwiecien",
  // names[i]
  photo: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?",
  //category-image
  color1: "white",
  //category-color1
  color2: "white" //category-color2

};
var result = template(data);
html_to_pdf.create(result, options).toFile("test.pdf", function (err, res) {
  if (err) return console.log(err);
  console.log(res);
});