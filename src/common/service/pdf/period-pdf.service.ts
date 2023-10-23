import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import PDFDocument from 'pdfkit';
import fs from 'fs';
import { ContentPDFService } from "./table-pdf.service";

@Injectable()
export class PeriodListService{
    constructor(private readonly dataBase: PrismaService,
      ) {}
    async content() {
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
  
          // await this.table.header(doc)
  
            const pdf = 'pdf';
  
            const filepath = `./public/pdf${pdf}`;
            if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);
      
            doc.pipe(fs.createWriteStream(`${filepath}/${pdf}.pdf`));
      
            doc.end();
  
            return `${pdf}.pdf`;
    }
}