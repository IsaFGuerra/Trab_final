import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RefundModule } from './modules/refund.module';
import { PrismaModule } from './modules/database.module';

@Module({
  imports: [PrismaModule, RefundModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
