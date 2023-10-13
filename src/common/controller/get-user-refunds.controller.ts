import { Controller, Get, Param } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { GetUserRefundsService } from "../service/get-user-refunds.service";

@Controller('refunds')
export class GetUserRefoundsController{
    constructor(private readonly service: GetUserRefundsService) {}
    
    @Get('/:id')
    async getRefunds(@Param('id') id: number) {
       return await this.service.getRefunds(+id);
    }
}