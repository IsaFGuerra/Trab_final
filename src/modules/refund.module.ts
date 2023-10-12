import { Module } from '@nestjs/common';
import { RequestRefundController } from 'src/common/controller/request-refund.controller';
import { RequestRefundService } from 'src/common/service/request-refund.service';
import { PrismaModule } from './database.module';

@Module({
  imports: [PrismaModule],
  controllers: [RequestRefundController],
  providers: [RequestRefundService],
})
export class RefundModule {}
