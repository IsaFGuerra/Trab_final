import { Controller, Get, Param } from "@nestjs/common";
import { ListToManagerService } from "../service/list-manager.service";

@Controller('/list')
export class ListToManagerController{
    constructor(private readonly service: ListToManagerService) {}
    
    @Get('/:perfil')
    async listToManager(@Param('perfil') perfil: String) {
       return await this.service.listToManager(perfil);
    }
}