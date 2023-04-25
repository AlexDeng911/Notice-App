import {Component, Input} from '@angular/core';
import {NoteInterface} from "../interfaces/note.interface";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note: any;

  createNote() {
    const newNote: NoteInterface = {
      id: 1,
      title: '',
      text: '',
      update: '',
      createDate: ''
    };
    this.noteService.deleteNote(this.note.id).subscribe((success) => {
      if (success) {
        const index = this.notes.findIndex(n => n.id === this.note.id);
        this.notes.splice(index, 1);
      }
    });
    this.NoteServices.createNote(newNote).subscribe((note) => {
      this.notes.push(note);
    });
  }

  editNote() {
    this.noteService.editNote(this.selectedNote).subscribe((note) => {
      const index = this.notes.findIndex(n => n.id === note.id);
      this.notes[index] = note;
    });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(this.note.id).subscribe((id) => {
      if (success) {
        const index = this.notes.findIndex(n => n.id === this.selectedNote.id);
        this.notes.splice(index, 1);
      }
    });
  }

}
