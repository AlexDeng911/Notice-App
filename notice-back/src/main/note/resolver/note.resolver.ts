import {
  Query,
  Resolver,
} from '@nestjs/graphql';
import { NoteEntity } from '../models/note.entity';
import { NoteService } from '../service/note.service';
import { PubSub } from 'graphql-subscriptions';


@Resolver(() => NoteEntity)
export class NoteResolver {
  constructor(private noteService: NoteService) {}

  @Query(() => [NoteEntity])
  async getNotes() {
    return this.noteService.findNotes();
  }
}
