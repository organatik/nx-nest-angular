/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { AppConfiguration, appConfiguration } from '@b2x/api/utils-config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const appConfig = app.get<AppConfiguration>(appConfiguration.KEY);
  app.setGlobalPrefix(globalPrefix);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('B2x example')
    .setDescription('The b2x API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(appConfig.port, () => {
    Logger.log(`Listening on: ${appConfig.domain}/${globalPrefix}`);
  });
}

bootstrap();
