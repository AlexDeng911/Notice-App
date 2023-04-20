import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {GetNotesQl} from "../queries/GetNotesQl";
import {Observable, pluck} from "rxjs";
import {ApolloQueryResult} from "@apollo/client/core";
import {NoteInterface} from "../interfaces/note.interface";

@Injectable({
  providedIn: 'root'
})

export class NoteServices{
  private noteServices: any;

  constructor (private apollo: Apollo, private getNoteQl: GetNotesQl){}

  getNotes(): Observable<NoteInterface[]>{
    return this.apollo.watchQuery<any>({
      query: this.getNoteQl.document,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(pluck('data','getNotes'));
  }

  createNote(): {

  }

}

// delete(id:string) {
//   this.noteServices.delete(id).subscribe(()=>{
//     this.getNotes();
//   })
// }
