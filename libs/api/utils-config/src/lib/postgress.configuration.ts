import { ConfigType, registerAs } from '@nestjs/config';
import { Inject } from '@nestjs/common';

export const postgresConfiguration = registerAs('postgres', () => {
  return {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: +process.env.POSTGRES_PORT || 5432,
    username: 'b2x-admin',
    password: 'b2x-password',
    database: process.env.DATABASENAME || 'postgres',
  };
});

export type PostgresConfiguration = ConfigType<typeof postgresConfiguration>;
export const InjectPostgresConfig = () => Inject(postgresConfiguration.KEY);
