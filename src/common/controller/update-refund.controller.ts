import { Body, Controller, Param, Put } from "@nestjs/common";
import { UpdateRefundService } from "../service/update-refund.service";
import { UpdateRefundDto } from "../dtos/update-refund.dto";

@Controller('/approve')
export class UpdateRefundController{
    constructor(private readonly service: UpdateRefundService) {}
    
    @Put()
    async createRefund(@Body() body: UpdateRefundDto) {
       return await this.service.approve(body);
    }
}