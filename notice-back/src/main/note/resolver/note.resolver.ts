import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NoteEntity } from '../models/note.entity';
import { NoteService } from '../service/note.service';
import { PubSub } from 'graphql-subscriptions';
import { NotFoundException } from '@nestjs/common';

const pubSub = new PubSub();
@Resolver(() => NoteEntity)
export class NoteResolver {
  constructor(private noteService: NoteService) {}

  @Query(() => [NoteEntity])
  async getNotes() {
    return this.noteService.findNotes();
  }
  @Mutation(() => NoteEntity, { name: 'createNote' })
  async createNote() {
    const createdNote = this.noteService.createNote();
    await pubSub.publish('noteCreated', {
      noteCreated: createdNote,
    });
    return createdNote;
  }
  @Mutation(() => Boolean, { name: 'deleteNote' })
  async deleteNote(@Args('id', { type: () => Number() }) id: number) {
    const deletedNote = await this.noteService.deleteNote(id);
    if (!deletedNote) {
      throw new NotFoundException(`Note with id ${id} does not exist`);
    }
    await pubSub.publish('noteDeleted', {
      noteDeleted: deletedNote,
    });
    return true;
  }
}
