import {Injectable} from "@angular/core";
import {Apollo, MutationResult} from "apollo-angular";
import {GetNotesQl} from "../queries/GetNotesQl";
import {CreateNotesQl} from "../queries/CreateNoteQL";
import {map, Observable, pluck} from "rxjs";
import {NoteInterface} from "../interfaces/note.interface";

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  [x: string]: any;
  private noteServices: any;
  private editNoteQL: any;
  private deleteNoteQL: any;


  constructor(private apollo: Apollo,
              private getNoteQl: GetNotesQl,
              private createNoteQL: CreateNotesQl) { }

  getNotes(): Observable<NoteInterface[]> {
    return this.apollo.watchQuery<any>({
      query: this.getNoteQl.document,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(pluck('data', 'getNotes'));
  }
  createNote(): Observable<MutationResult<{ createNote: NoteInterface }>>{
    return this.createNoteQL.mutate()
      // .pipe(pluck('data', ''))
  }
}


