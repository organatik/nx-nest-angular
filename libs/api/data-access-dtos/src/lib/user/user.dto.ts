import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserDto {
  @ApiProperty({
    example: 'login',
  })
  login: string;

  @ApiProperty({
    example: 'password',
  })
  @Exclude()
  password: string;

  @ApiProperty({
    example: 'Anton',
  })
  firstName: string;

  @ApiProperty({
    example: 'Chehonte',
  })
  lastName: string;
}
