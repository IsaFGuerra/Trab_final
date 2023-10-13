import { Injectable } from "@nestjs/common";
import { PrismaService } from "./database.service";
import { UpdateRefundDto } from "../dtos/update-refund.dto";

@Injectable()
export class UpdateRefundService{
    constructor(private readonly dataBase: PrismaService) {}

    async approve(body: UpdateRefundDto) {
        const newStatus = await this.dataBase.refund.update({
                where: {
                    id: body.id,
                },
                data: {
                    status: body.status,
                }
            });
            return newStatus;
        }
    }