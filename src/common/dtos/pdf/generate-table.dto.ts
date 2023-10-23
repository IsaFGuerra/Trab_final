import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export class GenerateTablePDFDto{
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