import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfiguration, postgresConfiguration } from '@b2x/api/utils-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfiguration, postgresConfiguration],
    }),
  ],
})
export class ApiFeatureConfigModule {}
