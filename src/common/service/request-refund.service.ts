import { Injectable } from '@nestjs/common';
import { PrismaService } from './database.service';
import { RequestRefundDto } from '../dtos/create-refund.dto';

@Injectable()
export class RequestRefundService {
  constructor(private readonly dataBase: PrismaService) {}

  async createRefund(body: RequestRefundDto) {
    const newRefund = await this.dataBase.refund.create({
        data: {
            description: body.description,
            price: body.price,
            SolicitateDate: new Date(),
        }
    });
    return newRefund;
  }
}