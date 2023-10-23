import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import { GenerateTablePDFDto } from "src/common/dtos/pdf/generate-table.dto";

@Injectable()
export class ContentPDFService{
    constructor(private readonly dataBase: PrismaService) {}
    async header(doc
      // : PDFKit.PDFDocument
      , body: GenerateTablePDFDto) {
      doc.addPage();
      
      //titulo
      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(15)
      .text('Relatório de Reembolsos:', 110, 65);

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
          approvedDate: {
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
      .text(preco.toString(), 100, 300);

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
          rejectedDate: {
            lt: body.endDate
          }
        }
      })

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(negados.toString(), 210, 65);

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
          approvedDate: {
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
      .text(percentApprove.toString(), 210, 65);

      //----------------------------------------
      
      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Porcentagem Negados:', 90, 200);

      const percentRejected = await this.dataBase.refund.count({
        where: {
          status: 'DENIED',
          solicitateDate: {
            gt: body.startDate
          },
          approvedDate: {
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
      .text(percentDenied.toString(), 210, 65);

      //----------------------------------------

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Quantidade de Reembolsos Aprovados:', 90, 250);
      
      const qntApproved = await this.dataBase.refund.count({
        where: {
          status: 'APPROVED',
          solicitateDate: {
            gt: body.startDate
          },
          approvedDate: {
            lt: body.endDate
          }
        },
      })

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(qntApproved.toString(), 210, 65);

      //----------------------------------------

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text('Quantidade de Reembolsos Negados:', 90, 250);
      
      const qntRejected = await this.dataBase.refund.count({
        where: {
          status: 'APPROVED',
          solicitateDate: {
            gt: body.startDate
          },
          approvedDate: {
            lt: body.endDate
          }
        },
      })

      doc
      .font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(11)
      .text(qntRejected.toString(), 210, 65);
    }
    }