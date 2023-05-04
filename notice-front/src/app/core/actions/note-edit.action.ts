import {NoteInterface} from "../../interfaces/note.interface";

export class NoteEdit {
  static readonly type = '[Note] Edit';

  constructor(public note: NoteInterface) {
  }
}
