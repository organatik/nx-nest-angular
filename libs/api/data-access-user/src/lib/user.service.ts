import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from '@b2x/api/data-access-dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(dto: UserDto): Promise<User> {
    const user = new User();
    user.login = dto.login;
    user.password = dto.password;
    user.firstName = dto.firstName;
    user.lastName = dto.lastName;

    return await this.userRepository.save(user);
  }
}
