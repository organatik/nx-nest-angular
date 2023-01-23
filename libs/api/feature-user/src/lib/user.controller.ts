import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '@b2x/api/data-access-user';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  OmitType,
} from '@nestjs/swagger';
import { UserDto } from '@b2x/api/data-access-dtos';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOkResponse({
    type: OmitType(UserDto, ['password']),
    isArray: true,
    description: 'Get users list',
  })
  async getAllUser() {
    return await this.userService.findAll();
  }

  @Post()
  @ApiCreatedResponse({
    type: OmitType(UserDto, ['password']),
  })
  async createUser(@Body() user: UserDto) {
    return await this.userService.createUser(user);
  }
}
