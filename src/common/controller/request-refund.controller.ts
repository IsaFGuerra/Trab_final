import { Body, Controller, Post } from "@nestjs/common";
// import { CreateRefundDto } from "../dto/create-refund.dto.ts";
import { RequestRefundDto } from "../dtos/create-refund.dto";
import { RequestRefundService } from "../service/request-refund.service";
import { Roles } from "../decorators/role.decorator";
import { Role } from "../enums/role.enum";

// @Roles(Role.EMPLOYEE)
@Controller('/refund')
export class RequestRefundController {
    constructor(private readonly service: RequestRefundService) {}
    @Post()
    async createRefund(@Body() body: RequestRefundDto) {
       await this.service.createRefund(body);
    }
}
