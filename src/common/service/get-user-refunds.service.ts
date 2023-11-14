import { Injectable } from "@nestjs/common";
import { PrismaService } from "./database.service";

@Injectable()
export class GetUserRefundsService {
    constructor(private readonly dataBase: PrismaService) {}

    //puxo do currentUser?
    async getRefunds(body: number) {
        const userRefounds = await this.dataBase.refund.findMany({
            where: {
                employeeId: body,
            },
            select: {
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