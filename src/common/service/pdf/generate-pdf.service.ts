import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import PDFDocument from 'pdfkit';
import fs from 'fs';
import { ContentPDFService } from "./table-pdf.service";
import { PeriodListService } from "./period-pdf.service";
import { v4 as uuid } from 'uuid';
import { GenerateTablePDFDto } from "src/common/dtos/pdf/generate-table.dto";

@Injectable()
export class GeneratePDFService{
    constructor(private readonly dataBase: PrismaService,
      private readonly table: ContentPDFService,
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

        await this.table.header(doc, body)

          const filename = uuid();
          const pdf = 'pdf';

          const filepath = `./public/${filename}.pdf`;
          // if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);
    
          doc.pipe(fs.createWriteStream(filepath));
    
          doc.end();

          return `${filename}.pdf`;
    }
}