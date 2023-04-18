import {Component,Input} from '@angular/core';
import {NoteServices} from "../services/note.services";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note: any;

  delete() {

  }
}
