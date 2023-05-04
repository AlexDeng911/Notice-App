import {Injectable} from "@angular/core";
import {NoteService} from "../../services/note.service";
import {NoteInterface} from "../../interfaces/note.interface";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {GetNotes} from "../actions/note.action";
import {NoteAdd} from "../actions/note-add.action";
import {NoteEdit} from "../actions/note-edit.action";
import {NoteDelete} from "../actions/note-delete.action";

export interface NoteStateModal{
  notes: NoteInterface[];
}

@State<NoteStateModal>({
  name: 'notes',
  defaults: {
    notes: []
  }
})
@Injectable()

export class NoteState{
  constructor(private noteService: NoteService) {
  }
  @Selector()
  static getNotes(state: NoteStateModal){
    return state.notes
  }
  @Action(GetNotes)  getNotes({getState, setState}: StateContext<NoteStateModal>){
    return this.noteService.getNotes().subscribe((result)=>{
      const state = getState();
      setState({
        ...state, notes: result
      })
    })
  }
  @Action(NoteAdd) noteAdd({getState, patchState}: StateContext<NoteStateModal>,
                           {note}: NoteAdd){
    const state = getState();
    patchState({
      notes: [...state.notes, note]
    })
  }
  @Action(NoteEdit) noteEdit({getState, patchState}: StateContext<NoteStateModal>,
                             {note}: NoteEdit){
    const state = getState();
    const notes = [...state.notes];
    const index = notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      notes[index] = note;
      patchState({
        notes: notes
      });
    }
  }
  @Action(NoteDelete) noteDelete({getState, patchState}: StateContext<NoteStateModal>,
                                 {id}: NoteDelete | any){
    const state = getState();
    const notes = [...state.notes];
    const index = notes.findIndex(n => n.id === id);
    if (index !== -1) {
      notes.splice(index, 1);
      patchState({
        notes: notes
      });
    }
  }
}
