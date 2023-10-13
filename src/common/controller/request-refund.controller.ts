import { Body, Controller, Post } from "@nestjs/common";
// import { CreateRefundDto } from "../dto/create-refund.dto.ts";
import { RequestRefundDto } from "../dtos/create-refund.dto";
import { RequestRefundService } from "../service/request-refund.service";
import { Roles } from "../decorators/role.decorator";
import { Role } from "../enums/role.enum";

//fazer a parte de apenas um deles poder acessar
@Controller('/refund')
export class RequestRefundController {
    constructor(private readonly service: RequestRefundService) {}
    @Post()
    async createRefund(@Body() body: RequestRefundDto) {
       return await this.service.createRefund(body);
    }
}
