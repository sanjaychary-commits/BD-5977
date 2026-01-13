import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebHook } from './webhook.entity';
import { DatabaseModule } from 'src/database/database.module';
import { webhookService } from './webhook.service';



@Module({
    
  imports:[ 
    TypeOrmModule.forFeature([WebHook]),],
  controllers: [WebhookController],
  providers: [webhookService],
  // exports: [WebhookService]
})

export class WebhookModule {}