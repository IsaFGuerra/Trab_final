import { Module } from "@nestjs/common";
import { PrismaModule } from "./database.module";
import { GeneratePDFService } from "src/common/service/pdf/generate-pdf.service";
import { GeneratePDFController } from "src/common/controller/pdf/generate-pdf.controller";

@Module({
    imports: [PrismaModule],
    controllers: [GeneratePDFController],
    providers: [GeneratePDFService],
  })
  export class RefundModule {}