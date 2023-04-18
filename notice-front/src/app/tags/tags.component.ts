import {Component, Input} from '@angular/core';
import {NoteServices} from "../services/note.services";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Input() notes: any;

  constructor(private noteServices: NoteServices) {}
}

