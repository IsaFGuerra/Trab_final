import { ApiProperty } from "@nestjs/swagger";

export class getRefundDto{
    @ApiProperty({
        description: 'id do funcionário para histórico de retornos',
        type: String,
        required: true,
      })
      id: string;
}