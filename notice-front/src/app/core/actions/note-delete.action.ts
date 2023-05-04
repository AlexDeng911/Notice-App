import {NoteInterface} from "../../interfaces/note.interface";

export class NoteDelete {
  static readonly type = '[Note] Delete';

  constructor(public note: NoteInterface) {
  }
}
