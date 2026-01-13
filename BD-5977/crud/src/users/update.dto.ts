import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './validation.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
