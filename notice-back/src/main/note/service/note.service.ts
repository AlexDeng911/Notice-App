import { Injectable } from '@nestjs/common';
import { NoteEntity } from '../models/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  //TODO: investigate, mb in future we will need to separate tag features to another service
  constructor(
    @InjectRepository(NoteEntity)
    private noteRepository: Repository<NoteEntity>,
  ) {}

  async findNotes(): Promise<NoteEntity[]> {
    return await this.noteRepository.find();
  }

  async createNote(): Promise<NoteEntity> {
    return await this.noteRepository.save(this.noteRepository.create());
  }

  async deleteNote(id: any): Promise<NoteEntity> {
    const note = await this.noteRepository.findOneBy(id);
    console.log(note.id);
    if (!note) {
      return null;
    }
    await this.noteRepository.remove(note);
  }
}
