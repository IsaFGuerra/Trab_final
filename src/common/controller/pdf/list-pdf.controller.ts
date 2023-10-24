import { Body, Controller, Post } from "@nestjs/common";
import { ListPDFDto } from "src/common/dtos/pdf/list-pdf.dto";
import { reportPeriodListService } from "src/common/service/pdf/reportPeriod-pdf.service";

@Controller('/list/refunds')
export class listPDFController{
    constructor(private readonly service: reportPeriodListService){}
   
    @Post()
    async list(@Body() body: ListPDFDto){
        try{
            const list = await this.service.content(body)
            return {
                // pdf,
                // uri: 'http://192.168.1.22:8080/public/' + pdf,
                uri: 'http://localhost:8080/public/' + list,
            }
            }catch(error){
                throw new Error(error)
            }
    }
}