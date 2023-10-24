import { Body, Controller, Post } from "@nestjs/common";
import { GenerateTablePDFDto } from "src/common/dtos/pdf/generate-table.dto";
import { GenerateTablePDFService } from "src/common/service/pdf/generate-pdf.service";

@Controller('/pdf')
export class GenerateTablePDFController{
    constructor(private readonly service: GenerateTablePDFService) {}
    
    @Post()
    async generatePDF(@Body() body: GenerateTablePDFDto) {
        try{
        const pdf = await this.service.generatePDF(body)
        return {
            // pdf,
            // uri: 'http://192.168.1.22:8080/public/' + pdf,
            uri: 'http://localhost:8080/public/' + pdf,
        }
        }catch(error){
            throw new Error(error)
        }
    }
}