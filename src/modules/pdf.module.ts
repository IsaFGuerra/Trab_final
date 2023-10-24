import { Module } from "@nestjs/common";
import { PrismaModule } from "./database.module";
import { GenerateTablePDFService } from "src/common/service/pdf/generate-pdf.service";
import { GenerateTablePDFController } from "src/common/controller/pdf/generate-table-pdf.controller";
import { ContentTablePDFService } from "src/common/service/pdf/content-table-pdf.service";
import { reportPeriodListService } from "src/common/service/pdf/reportPeriod-pdf.service";
import { GenerateStrokeService } from "src/common/service/pdf/generate-stroke.service";

@Module({
    imports: [PrismaModule],
    controllers: [GenerateTablePDFController],
    providers: [GenerateTablePDFService, ContentTablePDFService, reportPeriodListService, GenerateStrokeService],
  })
  export class PDFModule {}