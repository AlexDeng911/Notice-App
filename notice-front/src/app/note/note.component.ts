import {Component, Input} from '@angular/core';
import {NoteInterface} from "../interfaces/note.interface";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note: NoteInterface = {
    id: 1,
    title: '',
    text: '',
    createDate: new Date(),
    updateDate: new Date()
    };


  constructor(private noteState: Store) {
  }


  noteEdit(note: NoteInterface) {

  }

  noteDelete(note: NoteInterface) {

  }
}
