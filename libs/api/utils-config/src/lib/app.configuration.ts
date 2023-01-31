import { registerAs, ConfigType } from '@nestjs/config';
import { Inject } from '@nestjs/common';

export const appConfiguration = registerAs('app', () => {
  return {
    protocol: process.env.APP_PROTOCOL || 'http',
    host: process.env.APP_HOST || 'localhost',
    port: Number(process.env.PORT) || 5000,
    get domain() {
      return `${this.protocol}://${this.host}:${this.port}`;
    },
  };
});

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfiguration = () => Inject(appConfiguration.KEY);
