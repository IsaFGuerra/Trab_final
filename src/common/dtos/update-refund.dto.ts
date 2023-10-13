import { ApiProperty } from "@nestjs/swagger";

export class UpdateRefundDto 
// extends createZodDto(createClientZodDTO){
    {
    @ApiProperty({
      description: 'Novo status do pedido',
      type: String,
      required: true,
    })
    status: string;
    @ApiProperty({
        description: 'Id do pedido a ser alterado',
        type: Number,
        required: true,
      })
    id: number;
}