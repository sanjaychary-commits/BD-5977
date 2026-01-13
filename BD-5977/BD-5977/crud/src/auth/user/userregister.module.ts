// users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Register])],
  exports: [TypeOrmModule],
})
export class UsersModule {}

