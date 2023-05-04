import { Component } from '@angular/core';
import { Store} from "@ngxs/store";
import {CreateNote} from "../core/actions/note-add.action";
import {NoteInterface} from "../interfaces/note.interface";

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {

  note: NoteInterface = {
    id: Number(),
    title: '',
    text: '',
    createDate: new Date(),
    updateDate: new Date()
  }

  constructor(private store: Store) {
  }

  createNote(){
    this.store.dispatch(new CreateNote(this.note));
    this.note = {
      id: Number(),
      title: '',
      text: '',
      createDate: new Date(),
      updateDate: new Date()
    }
  }
}
