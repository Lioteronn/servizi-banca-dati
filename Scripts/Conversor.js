import { jsPDF } from "jspdf";
import { html2canvas } from "html2canvas";

const doc = new jsPDF();
const pdfButton = document.querySelector("#pdf-button");

window.jsPDF = window.jspdf.jsPDF;

// Convert HTML content to PDF
function Convert_HTML_To_PDF() {
    window.print();
}

pdfButton.addEventListener("click", Convert_HTML_To_PDF);
