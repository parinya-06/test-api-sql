import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const log = this.usersRepository.save(createUserDto);
    console.log('log = ', JSON.stringify(log));

    return 'This action adds a new user';
  }

  findAll(): Promise<User[]> {
    console.log('findAll');
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    console.log(`findOne This action returns a #${id} user`);
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
