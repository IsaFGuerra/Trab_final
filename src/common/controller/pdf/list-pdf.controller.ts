import { Body, Controller } from "@nestjs/common";
import { ListPDFDto } from "src/common/dtos/pdf/list-pdf.dto";
import { PeriodListService } from "src/common/service/pdf/period-pdf.service";

@Controller()
export class listPDFController{
    constructor(private readonly service: PeriodListService){}
    async list(@Body() body: ListPDFDto){
        return this.service.content()
    }
}