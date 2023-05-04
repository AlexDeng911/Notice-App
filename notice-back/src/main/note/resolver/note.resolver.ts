import {
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { NoteEntity } from '../models/note.entity';
import { NoteService } from '../service/note.service';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
@Resolver(() => NoteEntity)
export class NoteResolver {
  constructor(private noteService: NoteService) {}

  @Query(() => [NoteEntity])
  async getNotes() {
    return this.noteService.findNotes();
  }
  @Mutation(() => NoteEntity,{name: 'createNote'})
  async createNote() {
    const createdNote = this.noteService.createNote();
    await pubSub.publish('noteCreated', {
      noteCreated: createdNote,
    });
    return createdNote;
  }
}
