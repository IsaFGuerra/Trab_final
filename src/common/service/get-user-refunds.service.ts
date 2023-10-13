import { Injectable } from "@nestjs/common";
import { PrismaService } from "./database.service";

@Injectable()
export class GetUserRefundsService {
    constructor(private readonly dataBase: PrismaService) {}

    //puxo do currentUser?
    async getRefunds(param: number) {
        const userRefounds = await this.dataBase.refund.findMany({
            where: {
                employeeId: param,
            },
            select: {
                description: true,
                price: true,
                status: true,
                solicitateDate: true,
                approvedDate: true,
                rejectedDate: true,
            }
        });
        return userRefounds;
    }
}