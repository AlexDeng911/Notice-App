import { Module } from '@nestjs/common';
import { NoteService } from './service/note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './models/note.entity';
import { NoteResolver } from './resolver/note.resolver';

@Module({
  providers: [NoteService, NoteResolver],
  imports: [TypeOrmModule.forFeature([NoteEntity])],
})
export class NoteModule {}
