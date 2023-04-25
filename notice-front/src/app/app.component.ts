import {Component, Input} from '@angular/core';
import {NotesComponent} from "./notes/notes.component";
import {CreateNotesQl} from "./queries/CreateNoteQL";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  protected readonly NotesComponent = NotesComponent;
    protected readonly CreateNotesQl = CreateNotesQl;

  createNote() {

  }
}
