import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function generatePitchPDF(pitchData: {
  startupName: string;
  missionStatement: string;
  productDetails: string;
  targetMarket?: string;
  pitchText: string;
}) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  page.setFont(font);
  const fontSize = 12;
  let yPosition = height - 50;

  page.drawText(pitchData.startupName, {
    x: 50,
    y: yPosition,
    size: 24,
    color: rgb(0, 0.53, 0.71),
  });

  yPosition -= 40;

  const sections = [
    { label: "Mission Statement", content: pitchData.missionStatement },
    { label: "Product Details", content: pitchData.productDetails },
    { label: "Target Market", content: pitchData.targetMarket || "N/A" },
    { label: "Generated Pitch", content: pitchData.pitchText },
  ];

  for (const section of sections) {
    page.drawText(`${section.label}:`, {
      x: 50,
      y: yPosition,
      size: 14,
      color: rgb(0.2, 0.2, 0.2),
    });
    yPosition -= 20;

    page.drawText(section.content, {
      x: 50,
      y: yPosition,
      size: fontSize,
      color: rgb(0, 0, 0),
    });
    yPosition -= 50;
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
