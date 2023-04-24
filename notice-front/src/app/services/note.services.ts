import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {GetNotesQl} from "../queries/GetNotesQl";
import {map, Observable, pluck} from "rxjs";
import {NoteInterface} from "../interfaces/note.interface";
import {CreateNoteQL} from "../queries/CreateNotesQL";

interface CreateNoteResponse {
  createNote: NoteInterface;
}

interface getNoteQL {
  notes: NoteInterface[];
}

@Injectable({
  providedIn: 'root'
})

export class NoteServices {
  private noteServices: any;

  constructor(private apollo: Apollo,
              private getNoteQl: GetNotesQl,
              private createNoteQL: CreateNoteQL) {
  }

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
}


