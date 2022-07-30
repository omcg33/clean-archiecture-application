import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../posts/post.model';

@ObjectType()
export class Author {
  // @ts-ignore
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post])
  posts: Post[];
}