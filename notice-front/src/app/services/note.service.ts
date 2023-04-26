import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
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

  createNote(note: NoteInterface): Observable<NoteInterface> {
    return this.apollo.mutate<any, NoteInterface>({
      mutation: this.createNoteQL.document,
      fetchPolicy: 'network-only'
    }).pipe(
      map(response => response.data.createNote)
    );
  }

  editNote(note: NoteInterface): Observable<NoteInterface> {
    return this.apollo.mutate<any, NoteInterface>({
      mutation: this.editNoteQL.document,
      variables: {id: note.id, title: note.title, text: note.text, updateDate: note.updateDate, createDate: note.createDate},
      fetchPolicy: 'network-only'
    }).pipe(
      map(response => response.data.editNote)
    );
  }

  deleteNote(id: string): Observable<boolean> {
    return this.apollo.mutate<any>({
      mutation: this.deleteNoteQL.document,
      variables: {id},
      fetchPolicy: 'network-only'
    }).pipe(
      map(response => response.data.deleteNote)
    );
  }
}


