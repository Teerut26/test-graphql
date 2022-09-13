import { ObjectType, Field, Int } from '@nestjs/graphql';
import loggerMiddleware from '../user.middleware';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'รับเล่น',middleware: [loggerMiddleware] })
  exampleField: number;
}
