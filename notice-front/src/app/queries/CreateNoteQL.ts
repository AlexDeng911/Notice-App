import {Injectable, Query} from "@angular/core";
import {NoteInterface} from "../interfaces/note.interface";
import gql from "graphql-tag";
import {Mutation} from "apollo-angular";

@Injectable({providedIn: "root"})

export class CreateNotesQl extends Mutation<{createNote: NoteInterface}>  {
  override document: any = gql`
    mutation notes {
      createNote{
        id
        title
        text
        updateDate
        createDate
      }
    }`
}
