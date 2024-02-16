

import fs from 'fs';
import path from 'path';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  try {
    // Path to your PDF file
    const pdfPath = path.join(process.cwd(), 'path', 'to', 'your', 'pdf.pdf');

    // Set Content-Type header
    res.setHeader('Content-Type', 'application/pdf');

    // Stream the PDF file to the response
    const stream = fs.createReadStream(pdfPath);
    stream.pipe(res);
  } catch (error) {
    console.error('Error serving PDF:', error);
    res.status(500).end();
  }
};

export default handler;
