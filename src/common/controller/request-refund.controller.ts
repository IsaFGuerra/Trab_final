import { Body, Controller, Param, Post } from "@nestjs/common";
// import { CreateRefundDto } from "../dto/create-refund.dto.ts";
import { RequestRefundDto } from "../dtos/create-refund.dto";
import { RequestRefundService } from "../service/request-refund.service";

@Controller('/refund')
export class RequestRefundController {
    constructor(private readonly service: RequestRefundService) {}
    @Post('/:Perfil')
    async createRefund(@Body() body: RequestRefundDto, @Param("Perfil") perfil: string) {
        console.log('body', body)
       return await this.service.createRefund(body, perfil);
    }
}

