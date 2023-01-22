import { Controller, Get } from '@nestjs/common';
import { UserService } from '@b2x/api/data-access-user';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUser() {
    return await this.userService.findAll();
  }
}
