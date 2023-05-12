import {Component, Input} from '@angular/core';
import {NoteInterface} from "../interfaces/note.interface";
import {Store} from "@ngxs/store";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  [x: string]: any;
  @Input() note: NoteInterface = {
    id: 1,
    title: '',
    text: '',
    createDate: new Date(),
    updateDate: new Date()
  };


  constructor(private noteService: NoteService) {
  }


  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe(()=>{

    })
  }
}

