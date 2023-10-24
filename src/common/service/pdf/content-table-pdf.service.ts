import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import { GenerateTablePDFDto } from "src/common/dtos/pdf/generate-table.dto";
import { GenerateStrokeService } from "./generate-stroke.service";

@Injectable()
export class ContentTablePDFService{
    constructor(private readonly dataBase: PrismaService, private readonly service: GenerateStrokeService) {}
    async header(doc
      // : PDFKit.PDFDocument
      , body: GenerateTablePDFDto) {
      // doc.addPage();
      
      //titulo
      doc
      .font('Helvetica-Bold')
      .fillColor('#ED820E')
      .fontSize(15)
      .text('Relatório de Reembolsos:', 110, 50);

      //----------------------------------------

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Valor Total de Aprovados:', 90, 100);

      const valorAprovados = await this.dataBase.refund.findMany({
      where: {
          status: 'APPROVED',
          solicitateDate: {
            gt: body.startDate
          },
          modificationDate: {
            lt: body.endDate
          }
       },
       })

      let preco = 0.0
       for (const aux in valorAprovados){
          const obj = valorAprovados[aux]
          preco = preco + obj.price
       }

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(preco.toString(), 347, 100);

      //----------------------------------------

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Valor Total de Negados:', 90, 150);

      const negados = await this.dataBase.refund.count({
        where: {
          status: 'DENIED',
          solicitateDate: {
            gt: body.startDate
          },
          modificationDate: {
            lt: body.endDate
          }
        }
      })

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(negados.toString(), 347, 150);

      //----------------------------------------

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Porcentagem Aprovados:', 90, 200);

      const percentAprovados = await this.dataBase.refund.count({
        where: {
          status: 'APPROVED',
          solicitateDate: {
            gt: body.startDate
          },
          modificationDate: {
            lt: body.endDate
          }
        },
      })

      const total = await this.dataBase.refund.count({})
      const percentApprove = ((percentAprovados * 100) / total).toFixed(2)

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(percentApprove.toString(), 340, 200);

      //----------------------------------------
      
      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Porcentagem Negados:', 90, 250);

      const percentRejected = await this.dataBase.refund.count({
        where: {
          status: 'DENIED',
          solicitateDate: {
            gt: body.startDate
          },
          modificationDate: {
            lt: body.endDate
          }
        },
      })

      const totalDenied = await this.dataBase.refund.count({})
      const percentDenied = ((percentRejected * 100) / totalDenied).toFixed(2)

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(percentDenied.toString(), 340, 250);

      //----------------------------------------

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Quantidade de Reembolsos Aprovados:', 90, 300);
      
      const qntApproved = await this.dataBase.refund.count({
        where: {
          status: 'APPROVED',
          solicitateDate: {
            gt: body.startDate
          },
          modificationDate: {
            lt: body.endDate
          }
        },
      })

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(qntApproved.toString(), 347, 300);

      //----------------------------------------

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Quantidade de Reembolsos Negados:', 90, 350);
      
      const qntRejected = await this.dataBase.refund.count({
        where: {
          status: 'APPROVED',
          solicitateDate: {
            gt: body.startDate
          },
          modificationDate: {
            lt: body.endDate
          }
        },
      })

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(qntRejected.toString(), 347, 350);

      await this.service.generateHL(doc, 87, 375, 125);
      await this.service.generateHL(doc, 87, 375, 175);
      await this.service.generateHL(doc, 87, 375, 225);
      await this.service.generateHL(doc, 87, 375, 275);
      await this.service.generateHL(doc, 87, 375, 325);
      await this.service.generateHL(doc, 87, 375, 375);
      await this.service.generateVL(doc, 325, 90, 385); 


    }
    }