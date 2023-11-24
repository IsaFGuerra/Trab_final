import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database.service";
import { ListPDFDto } from "src/common/dtos/pdf/list-pdf.dto";
import { GenerateStrokeService } from "./generate-stroke.service";

@Injectable()
export class ContentListPDFService{
    constructor(private readonly dataBase: PrismaService, private readonly service: GenerateStrokeService) {}
        
    async contentList(doc, body: ListPDFDto){
      try{

      console.log('body', body)

      const teste1 = new Date(body.startDate);
      const teste2 = new Date(body.endDate);

      console.log(typeof(teste1))
      console.log(teste2)

        const aprovados = await this.dataBase.refund.findMany({
            where: {
                // status: 'APPROVED',
                solicitateDate: {
                  gt: teste1
                },
                modificationDate: {
                  lt: teste2
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
            //  let aux = 100

            const meses = [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ];

            doc
                .font('Helvetica-Bold')
                .fillColor('black')
                .fontSize(11)

                .text("Descrição:", 40, 40);

                doc
                .font('Helvetica-Bold')
                .fillColor('black')
                .fontSize(11)
                .text("Preço:", 160, 40);
                doc
                .font('Helvetica-Bold')
                .fillColor('black')
                .fontSize(11)
                .text("Data de Solicitação:", 280, 40);
                doc
                .font('Helvetica-Bold')
                .fillColor('black')
                .fontSize(11)
                .text("Data de Modificação:", 400, 40);        

            let aux = 80;
            for (const key in aprovados) {
                // (_, y, x)
                doc
                    .font('Helvetica-Bold')
                    .fillColor('black')
                    .fontSize(11)
                    .text(aprovados[key].description, 40, aux + 0);

                doc
                    .font('Helvetica-Bold')
                    .fillColor('black')
                    .fontSize(11)
                    .text(aprovados[key].price, 160, aux + 0);

                    const dataObj = new Date(aprovados[key].solicitateDate);
                    const dia = dataObj.getDate();
                    const mes = meses[dataObj.getMonth()];
                    const ano = dataObj.getFullYear();
                
                    const correctData =  `${dia}/${mes}/${ano}`;

                  doc
                    .font('Helvetica-Bold')
                    .fillColor('black')
                    .fontSize(11)
                    .text(correctData, 280, aux + 0);

                    const dataObj2 = new Date(aprovados[key].modificationDate);
                    const dia2 = dataObj.getDate();
                    const mes2 = meses[dataObj.getMonth()];
                    const ano2 = dataObj.getFullYear();
                
                    const correctData2 =  `${dia2}/${mes2}/${ano2}`;
                
                    doc
                    .font('Helvetica-Bold')
                    .fillColor('black')
                    .fontSize(11)
                    .text(correctData2, 400, aux + 0);

                aux += 40;

                await this.service.generateHL(doc, 30, 520, 60);
                await this.service.generateHL(doc, 30, 520, 105);
                await this.service.generateHL(doc, 30, 520, 145);
                await this.service.generateHL(doc, 30, 520, 185);

                await this.service.generateVL(doc, 140, 230, 30); 
                await this.service.generateVL(doc, 260, 230, 30); 
                await this.service.generateVL(doc, 390, 230, 30); 

              }
            } catch (error) {
              console.log(error)
              throw new Error(error)
            }
    }
}