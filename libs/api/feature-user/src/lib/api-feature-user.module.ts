import { Module } from '@nestjs/common';
import { ApiDataAccessUserModule } from '@b2x/api/data-access-user';
import { UserController } from './user.controller';

@Module({
  imports: [ApiDataAccessUserModule],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class ApiFeatureUserModule {}
