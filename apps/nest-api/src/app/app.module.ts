import { Module } from '@nestjs/common';
import { ApiFeatureConfigModule } from '@b2x/api/feature-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  PostgresConfiguration,
  postgresConfiguration,
} from '@b2x/api/utils-config';
import { ApiFeatureUserModule } from '@b2x/api/feature-user';

@Module({
  imports: [
    ApiFeatureConfigModule,
    ApiFeatureUserModule,
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
  controllers: [],
  providers: [],
})
export class AppModule {}
