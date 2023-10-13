import { Controller, Get } from "@nestjs/common";
import { ListToManagerService } from "../service/list-manager.service";

@Controller('/list')
export class ListToManagerController{
    constructor(private readonly service: ListToManagerService) {}
    
    @Get()
    async listToManager() {
       return await this.service.listToManager();
    }
}