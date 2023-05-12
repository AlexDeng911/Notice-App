import {NoteInterface} from "../../interfaces/note.interface";

export class DeleteNote {
  static readonly type = '[Delete] Note';

  constructor(public id: NoteInterface) {
  }
}
