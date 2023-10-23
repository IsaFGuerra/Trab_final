import { Module } from "@nestjs/common";
import { PrismaModule } from "./database.module";
import { GeneratePDFService } from "src/common/service/pdf/generate-pdf.service";
import { GeneratePDFTableController } from "src/common/controller/pdf/generate-table-pdf.controller";
import { ContentPDFService } from "src/common/service/pdf/table-pdf.service";
import { PeriodListService } from "src/common/service/pdf/period-pdf.service";

@Module({
    imports: [PrismaModule],
    controllers: [GeneratePDFTableController],
    providers: [GeneratePDFService, ContentPDFService, PeriodListService],
  })
  export class PDFModule {}