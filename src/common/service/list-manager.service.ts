import { Injectable } from "@nestjs/common";
import { PrismaService } from "./database.service";

@Injectable()
export class ListToManagerService {
    constructor(private readonly dataBase: PrismaService) {}

    async listToManager() {
        const toManager = await this.dataBase.refund.findMany({
            where: {
                status: 'PENDING'
            },
            select:{ 
                id: true,
                description: true,
                price: true,
                solicitateDate: true,
                employee: {
                    select: {
                        id: true,
                    }
                }
            }
        });
        return toManager;
    }
}