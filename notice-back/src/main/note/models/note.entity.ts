import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@nestjs-query/query-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('notes')
@ObjectType()
export class NoteEntity {
  @PrimaryGeneratedColumn('increment')
  @IDField(() => ID)
  id: number;

  @Column({ nullable: true, default: '' })
  @Field({ nullable: true })
  title?: string;

  @Column({ nullable: true, default: '' })
  @Field({ nullable: true })
  text?: string;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn()
  createDate: Date;

  @Field(() => GraphQLISODateTime, {})
  @UpdateDateColumn()
  updateDate: Date;
}
