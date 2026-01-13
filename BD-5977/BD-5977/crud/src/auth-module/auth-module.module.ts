import { Module } from '@nestjs/common';
import { AuthModuleService } from './auth-module.service';
import { AuthModuleController } from './auth-module.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[ DatabaseModule.register({
      dbName:"CRUD"
    }),],
  controllers: [AuthModuleController],
  providers: [AuthModuleService],
})
export class AuthModuleModule {}
