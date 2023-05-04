import {NoteInterface} from "../../interfaces/note.interface";

export class NoteAdd {
  static readonly type = '[Note] Add';

  constructor(public note: NoteInterface) {
  }
}
