import { Module } from '@nestjs/common';
import { RequestRefundController } from 'src/common/controller/request-refund.controller';
import { RequestRefundService } from 'src/common/service/request-refund.service';
import { PrismaModule } from './database.module';
import { GetUserRefoundsController } from 'src/common/controller/get-user-refunds.controller';
import { GetUserRefundsService } from 'src/common/service/get-user-refunds.service';
import { ListToManagerController } from 'src/common/controller/list-manager-refunds.controller';
import { ListToManagerService } from 'src/common/service/list-manager.service';
import { UpdateRefundController } from 'src/common/controller/update-refund.controller';
import { UpdateRefundService } from 'src/common/service/update-refund.service';

@Module({
  imports: [PrismaModule],
  controllers: [RequestRefundController, GetUserRefoundsController, ListToManagerController, UpdateRefundController],
  providers: [RequestRefundService, GetUserRefundsService, ListToManagerService, UpdateRefundService],
})
export class RefundModule {}
