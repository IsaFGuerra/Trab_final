import { Module } from '@nestjs/common';
import { RefundModule } from './modules/refund.module';
import { PrismaModule } from './modules/database.module';
import { PDFModule } from './modules/pdf.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [PrismaModule, RefundModule, PDFModule, 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      renderPath: '/public',
      serveRoot: '/public',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
