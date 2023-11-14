import { Body, Controller, Param, Post } from "@nestjs/common";
// import { CreateRefundDto } from "../dto/create-refund.dto.ts";
import { RequestRefundDto } from "../dtos/create-refund.dto";
import { RequestRefundService } from "../service/request-refund.service";

@Controller('/refund')
export class RequestRefundController {
    constructor(private readonly service: RequestRefundService) {}
    @Post()
    async createRefund(@Body() body: RequestRefundDto) {
        console.log('body', body)
       return await this.service.createRefund(body);
    }
}

