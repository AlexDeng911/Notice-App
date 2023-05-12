import {Injectable} from "@angular/core";
import {NoteService} from "../../services/note.service";
import {NoteInterface} from "../../interfaces/note.interface";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {GetNotes} from "../actions/note.action";
import {CreateNote} from "../actions/note-add.action";
import {DeleteNote} from "../actions/note-delete.action";
import {tap} from "rxjs";

export interface NoteStateModal {
  notes: NoteInterface[];
  selectedNote: NoteInterface | null;
}

@State<NoteStateModal>({
  name: 'notes',
  defaults: {
    notes: [],
    selectedNote: null
  }
})
@Injectable()

export class NoteState {
  constructor(private noteService: NoteService) {
  }

  @Selector()
  static getNotes(state: NoteStateModal) {
    return state.notes
  }

  @Action(GetNotes) getNotes({getState, setState}: StateContext<NoteStateModal>) {
    return this.noteService.getNotes().subscribe((result) => {
      const state = getState();
      setState({
        ...state, notes: result
      })
    })
  }

  @Action(CreateNote)
  noteAdd({getState, setState}: StateContext<NoteStateModal>,
          {note}: CreateNote) {
    const state = getState();
    return this.noteService.createNote().pipe(tap((result) => {
      if (result.data) {
        const status = state.notes.filter((note) => {
          return note.id == result.data?.createNote.id
        }).length > 0;
        setState({
          ...state,
          notes: status ? [...state.notes] : [...state.notes, result.data.createNote],
          selectedNote: result.data.createNote
        })
      }
    }))
  }

  @Action(DeleteNote)
  noteDelete({getState, setState}: StateContext<NoteStateModal>,
             {id}: DeleteNote) {
    const state = getState();
    return this.noteService.deleteNote(id).pipe(tap(() => {
      setState({
        ...state,
        notes: state.notes.filter(note => id !== id),
        selectedNote: null
      })
    }))
  }
}
