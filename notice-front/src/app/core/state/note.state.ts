import {Injectable} from "@angular/core";
import {NoteService} from "../../services/note.service";
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
}
