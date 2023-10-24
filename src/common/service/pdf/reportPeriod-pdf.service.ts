import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import { ListPDFDto } from "src/common/dtos/pdf/list-pdf.dto";
import { v4 as uuid } from 'uuid';

@Injectable()
export class reportPeriodListService{
    constructor(private readonly dataBase: PrismaService,
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


      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Valor Total de Aprovados:', 90, 100);

      const aprovados = await this.dataBase.refund.findMany({
        where: {
            status: 'APPROVED',
            solicitateDate: {
              gt: body.startDate
            },
            modificationDate: {
              lt: body.endDate
            }
         },
         select: {
          description: true,
          price: true,
          solicitateDate: true,
          modificationDate: true,
          manager: {
            select: {
              id: true,
            }
          }
         }
         })
  
        const filename = uuid();
        const pdf = 'pdf';

        const filepath = `./public/${filename}.pdf`;
        // if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);
  
        doc.pipe(fs.createWriteStream(filepath));
  
        doc.end();

        return `${filename}.pdf`;
    }
}