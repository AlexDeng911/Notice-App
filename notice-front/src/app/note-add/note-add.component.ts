import { Component } from '@angular/core';
import { Store} from "@ngxs/store";
import {NoteAdd} from "../core/actions/note-add.action";
import {NoteInterface} from "../interfaces/note.interface";

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent {

  note: NoteInterface = {
    id: Number(),
    title: '',
    text: '',
    createDate: new Date(),
    updateDate: new Date()
  }

  constructor(private store: Store) {
  }

  noteAdd(){
    this.store.dispatch(new NoteAdd(this.note));
    this.note = {
      id: (this.note.id)+1,
      title: '',
      text: '',
      createDate: new Date(),
      updateDate: new Date()
    }
  }
}
