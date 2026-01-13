import { AppController } from './app.controller';
import { UserStore } from './store/crud.store';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { gateWayModule } from './gateway/gateway.module';
import { WebhookModule } from './WebHooks/web.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // DatabaseModule.register({
    //   dbName:"newdb"
    // }),

    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) => {
    //     const dbName = config.get('DB_DATABASE');
    //     console.log('DB NAME', dbName);

    //     return {
    //       type: 'postgres',
    //       host: config.get('DB_HOST'),
    //       port: Number(config.get('DB_PORT')),
    //       username: config.get('DB_USER'),
    //       password: config.get('DB_PASSWORD'),
    //       database: dbName,
    //       autoLoadEntities: true,
    //       synchronize: true,
    //     };
    //   },
    // }),
DatabaseModule.register({ dbName:'newdb'}),
    UserModule,
    AuthModule,
    AuthModuleModule,
    gateWayModule,
    WebhookModule
  ],
  controllers: [AppController],
  providers: [UserStore],
})
export class AppModule {}


