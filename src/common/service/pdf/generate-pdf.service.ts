import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import PDFDocument from 'pdfkit';
import fs from 'fs';

@Injectable()
export class GeneratePDFService{
    constructor(private readonly dataBase: PrismaService) {}
    async generatePDF() {
        const doc = new PDFDocument({
            size: 'A4',
            bufferPages: true,
            margins: {
              top: 30,
              bottom: 10,
              left: 10,
              right: 10,
            },
          });



          const pdf = 'pdf';

          const filepath = `./src/${pdf}`;
          if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);
    
          doc.pipe(fs.createWriteStream(`${filepath}/${pdf}.pdf`));
    
          doc.end();

          return `${pdf}.pdf`;
    }
}