import { Injectable } from "@nestjs/common";
import { PrismaService } from "./database.service";
import { getRefundDto } from "../dtos/get-refund.dto";
import { type } from "os";

@Injectable()
export class GetUserRefundsService {
    constructor(private readonly dataBase: PrismaService) {}

    async getRefunds(id: number) {
        const userRefounds = await this.dataBase.refund.findMany({
            where: {
                employee: {
                    id: id
                }
            },
            select: {
                id: true,
                description: true,
                price: true,
                status: true,
                solicitateDate: true,
                modificationDate: true
            }
        });
        return userRefounds;
    }
}