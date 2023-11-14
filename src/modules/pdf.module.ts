import { Module } from "@nestjs/common";
import { PrismaModule } from "./database.module";
import { GenerateTablePDFService } from "src/common/service/pdf/generate-pdf.service";
import { GenerateTablePDFController } from "src/common/controller/pdf/generate-table-pdf.controller";
import { ContentTablePDFService } from "src/common/service/pdf/content-table-pdf.service";
import { GenerateStrokeService } from "src/common/service/pdf/generate-stroke.service";
import { listRefundsPDFController } from "src/common/controller/pdf/list-refunds-pdf.controller";
import { ListRefundsPDFService } from "src/common/service/pdf/reportPeriod-pdf.service";
import { ContentListPDFService } from "src/common/service/pdf/content-list.service";

@Module({
    imports: [PrismaModule],
    controllers: [GenerateTablePDFController, listRefundsPDFController],
    providers: [GenerateTablePDFService, ContentTablePDFService, GenerateStrokeService, ListRefundsPDFService, ContentListPDFService],
  })
  export class PDFModule {}