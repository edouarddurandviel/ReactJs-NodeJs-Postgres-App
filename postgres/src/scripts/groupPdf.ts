const merge = async () => {
  const { PDFDocument } = require("pdf-lib");
  const fs = require("fs");
  const path = require("path");

  const tmpRoot = path.resolve("tmp");
  const docs = fs.readdirSync(tmpRoot);

  const mergedPdf = await PDFDocument.create();

  for (const doc of docs) {
    const docPath = path.join(tmpRoot, doc);
    const pdfB = await PDFDocument.load(fs.readFileSync(docPath));
    const copiedPage = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
    await mergedPdf.addPage(copiedPage[0]);
  }

  const mergedPdfFile = await mergedPdf.save();

  const write = path.join(tmpRoot, "merged.pdf");
  fs.writeFileSync(write, mergedPdfFile);
};

merge();
