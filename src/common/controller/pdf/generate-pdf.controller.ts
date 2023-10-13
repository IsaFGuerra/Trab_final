import { Controller, Post } from "@nestjs/common";
import { GeneratePDFService } from "src/common/service/pdf/generate-pdf.service";

@Controller('/pdf')
export class GeneratePDFController{
    constructor(private readonly service: GeneratePDFService) {}
    
    @Post()
    async generatePDF() {
        return this.service.generatePDF()
    }
}