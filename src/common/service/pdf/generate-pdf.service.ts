import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import { v4 as uuid } from 'uuid';
import { GenerateTablePDFDto } from 'src/common/dtos/pdf/generate-table.dto';
import { ContentTablePDFService } from './content-table-pdf.service';

@Injectable()
export class GenerateTablePDFService {
  constructor(
    private readonly dataBase: PrismaService,
    private readonly table: ContentTablePDFService,
  ) {}
  async generatePDF(body: GenerateTablePDFDto) {
    const PDFDocument = require('pdfkit');
    const fs = require('fs');

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

    await this.table.header(doc, body);

          const filename = uuid();
          const pdf = 'pdf';

          const filepath = `./public/${filename}.pdf`;
          // if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);
    
          doc.pipe(fs.createWriteStream(filepath));
    
          doc.end();

          return `${filename}.pdf`;
    }
}