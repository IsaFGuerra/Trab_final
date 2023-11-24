import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import { ListPDFDto } from "src/common/dtos/pdf/list-pdf.dto";
import { v4 as uuid } from 'uuid';
import { ContentListPDFService } from "./content-list.service";

@Injectable()
export class ListRefundsPDFService{
    constructor(private readonly dataBase: PrismaService, private readonly service: ContentListPDFService
      ) {}
    async content(body: ListPDFDto) {
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

        await this.service.contentList(doc, body);
  
        const filename = uuid();
        const pdf = 'pdf';

        const filepath = `./public/${filename}.pdf`;
        // if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);
  
        doc.pipe(fs.createWriteStream(filepath));
  
        doc.end();

        return `${filename}.pdf`;
    }
}