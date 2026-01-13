import { Module, DynamicModule } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseOptions } from './interface/database-options.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WebHook } from 'src/WebHooks/webhook.entity';
// import { WebHook } from 'src/WebHooks/webhook.entity';

@Module({})
export class DatabaseModule {
  static async register(options: DatabaseOptions): Promise<DynamicModule> {
    console.log('options', options);
    return {
      module: DatabaseModule, 
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => {
            return {
              type: 'postgres',
              host: config.get('DB_HOST'),
              port: Number(config.get('DB_PORT')),
              username: config.get('DB_USER'),
              password: config.get('DB_PASSWORD'),
              database: options.dbName,
              //   autoLoadEntities: true,
                  autoLoadEntities: true,

              entities: [WebHook],
              synchronize: true,
            };
          },
        }),
      ],
      providers: [
        {
          provide: 'DATABASE_OPTIONS',
          useValue: options,
        },
        DatabaseService,
      ],
      exports: [DatabaseService],
    };
  }
}
