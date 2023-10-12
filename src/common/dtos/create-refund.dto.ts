import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';
// import { createZodDto } from 'nestjs-zod';

// export const createClientZodDTO = z.object({
//     description: z.string(),
//     price: z.number(),
//     status: z.string(),
//   });
  

export class RequestRefundDto 
// extends createZodDto(createClientZodDTO){
    {
    @ApiProperty({
      description: 'Descrição da devolução',
      type: String,
      required: true,
    })
    description: string;
    @ApiProperty({
        description: 'Valor da devolução',
        type: Number,
        required: true,
      })
      price: number;
}
  