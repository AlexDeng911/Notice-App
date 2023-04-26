import {Component} from '@angular/core';
import {ApolloQueryResult} from "@apollo/client/core";
import {Observable} from "rxjs";
import {NoteInterface} from "../interfaces/note.interface";
import {NoteState} from "../core/state/note.state";
import {GetNotes} from "../core/actions/note.action";
import {Store} from "@ngxs/store"

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notes$: Observable<NoteInterface[]>;

  constructor(private noteState: Store) {
    this.notes$ = this.noteState.select(NoteState.getNotes)
    this.notes$.subscribe((result)=>{
      console.log(result);
    })
    this.noteState.dispatch(new GetNotes())
  }
}

