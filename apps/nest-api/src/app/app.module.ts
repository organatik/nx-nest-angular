import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiFeatureConfigModule } from '@b2x/api/feature-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  PostgresConfiguration,
  postgresConfiguration,
} from '@b2x/api/utils-config';

@Module({
  imports: [
    ApiFeatureConfigModule,
    TypeOrmModule.forRootAsync({
      inject: [postgresConfiguration.KEY],
      useFactory: (config: PostgresConfiguration) => {
        return {
          type: 'postgres',
          host: config.host,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          entities: [__dirname + '/**/*.entity.ts'],
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
