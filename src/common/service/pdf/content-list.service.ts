import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import { ListPDFDto } from "src/common/dtos/pdf/list-pdf.dto";

@Injectable()
export class ContentListPDFService{
    constructor(private readonly dataBase: PrismaService) {}
        
    async contentList(doc, body: ListPDFDto){
        const aprovados = await this.dataBase.refund.findMany({
            where: {
                status: 'APPROVED',
                // solicitateDate: {
                //   gt: body.startDate
                // },
                // modificationDate: {
                //   lt: body.endDate
                // }
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
            //  let aux = 100

            const meses = [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ];
            let aux = 100;
            for (const key in aprovados) {
                // (_, y, x)
                doc
                    .font('Helvetica-Bold')
                    .fillColor('black')
                    .fontSize(11)
                    .text(aprovados[key].description, 10, aux + 50);

                doc
                    .font('Helvetica-Bold')
                    .fillColor('black')
                    .fontSize(11)
                    .text(aprovados[key].price, 60, aux + 100);

                    const dataObj = new Date(aprovados[key].solicitateDate);
                    const dia = dataObj.getDate();
                    const mes = meses[dataObj.getMonth()];
                    const ano = dataObj.getFullYear();
                
                    const correctData =  `${dia}/${mes}/${ano}`;

                  doc
                    .font('Helvetica-Bold')
                    .fillColor('black')
                    .fontSize(11)
                    .text(correctData, 110, aux + 150);

                    const dataObj2 = new Date(aprovados[key].modificationDate);
                    const dia2 = dataObj.getDate();
                    const mes2 = meses[dataObj.getMonth()];
                    const ano2 = dataObj.getFullYear();
                
                    const correctData2 =  `${dia2}/${mes2}/${ano2}`;
                
                    doc
                    .font('Helvetica-Bold')
                    .fillColor('black')
                    .fontSize(11)
                    .text(correctData2, 160, aux + 200);

                aux += 100;
            }
    }
}