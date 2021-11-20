import { Router } from 'express';
import { html_to_pdf} from 'html-pdf-node';

let options = { format: A4 }
// let file = { content: "<h1>Welcome to html-pdf-node</h1>" };
let file = { content: '../templates/layout.hbs' };

html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
  console.log("PDF Buffer:-", pdfBuffer);
});


const router = Router();
const app = express();



router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

export default router;
