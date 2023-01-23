import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'login',
  })
  login: string;

  @ApiProperty({
    example: 'password',
  })
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
