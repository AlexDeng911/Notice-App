import {Injectable, Query} from "@angular/core";
import {NoteInterface} from "../interfaces/note.interface";
import gql from "graphql-tag";

@Injectable({providedIn: "root"})

export class CreateNotesQl extends Query  {
  document: any = gql`
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
