import {NoteInterface} from "../../interfaces/note.interface";

export class CreateNote {
  static readonly type = '[Note] Create';

  constructor(public note: NoteInterface) {
  }
}
