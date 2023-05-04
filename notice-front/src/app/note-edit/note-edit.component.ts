import { Component } from '@angular/core';
import {NoteInterface} from "../interfaces/note.interface";
import {NoteService} from "../services/note.service";
import {Store} from "@ngxs/store";
import { NoteState } from "../core/state/note.state";
import {NoteEdit} from "../core/actions/note-edit.action";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent {
  note: NoteInterface = {
    id: 1,
    title: '',
    text: '',
    createDate: new Date(),
    updateDate: new Date()
  }
  private noteService: any;

  constructor(private store: Store) {
  }

  noteEdit(note: NoteInterface){
    this.store.dispatch(new NoteEdit(note))
  }

  saveEdit(note: NoteInterface) {
    this.noteService.saveEdit(this.note);
    console.log(this.note);
  }
}
