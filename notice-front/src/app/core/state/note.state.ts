import {Injectable} from "@angular/core";
import {NoteServices} from "../../services/note.services";
import {NoteInterface} from "../../interfaces/note.interface";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {GetNotes} from "../actions/note.action";

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
  constructor(private noteServices: NoteServices) {
  }
  @Selector()
  static getNotes(state: NoteStateModal){
    return state.notes
  }
  @Action(GetNotes)
  getNotes({getState, setState}: StateContext<NoteStateModal>){
    return this.noteServices.getNotes().subscribe((result)=>{
      const state = getState();
      setState({
        ...state, notes: result
      })
    })
  }
}
