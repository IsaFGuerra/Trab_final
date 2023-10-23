import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';
// import { createZodDto } from 'nestjs-zod';

// export const createClientZodDTO = z.object({
//     description: z.string(),
//     price: z.number(),
//     status: z.string(),
//   });
  

export class ListPDFDto{
// extends createZodDto(createClientZodDTO){
    @ApiProperty({
      description: 'Data de início da pesquisa',
      type: Date,
      required: true,
    })
    startDate: Date;

    @ApiProperty({
        description: 'Data final da pesquisa',
        type: Date,
        required: true,
      })
      endDate: Date;
}