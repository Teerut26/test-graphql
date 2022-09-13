import { Injectable } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import loggerMiddleware from './user.middleware';

@Injectable()
export class UserService {
  create(createUserInput: CreateUserInput) {
    console.log(createUserInput);
    return { exampleField: 20 };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
