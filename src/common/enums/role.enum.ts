import { z } from 'nestjs-zod/z';

export enum Role {
  MANAGEMENT = 'Management',
  EMPLOYEE = 'Employee',
}

export const roleZodDTO = z.enum([Role.MANAGEMENT, Role.EMPLOYEE]);
