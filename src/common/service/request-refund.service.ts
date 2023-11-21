import { Injectable } from '@nestjs/common';
import { PrismaService } from './database.service';
import { RequestRefundDto } from '../dtos/create-refund.dto';

@Injectable()
export class RequestRefundService {
  constructor(private readonly dataBase: PrismaService) {}

  async createRefund(body: RequestRefundDto, perfil : string) {
    if (perfil !== 'EMPLOYEE') {
      throw new Error('Acesso não autorizado');
    }
    const newRefund = await this.dataBase.refund.create({
      data: {
        description: body.description,
        price: body.price,
        solicitateDate: new Date(),
        employee: {
          connect: {
            id: body.employeeId,
          },
        },
      },
    });
    return newRefund;
  }
}