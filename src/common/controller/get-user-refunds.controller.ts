import { Body, Controller, Get, Param } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { GetUserRefundsService } from "../service/get-user-refunds.service";
import { getRefundDto } from "../dtos/get-refund.dto";

@Controller('/refunds')
export class GetUserRefoundsController{
    constructor(private readonly service: GetUserRefundsService) {}
    
    @Get()
    async getRefunds(@Body() id: getRefundDto, @Param('perfil') perfil: String) {
       return await this.service.getRefunds(id, perfil);
    }
}