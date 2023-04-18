import {Injectable} from "@angular/core";
import {Query} from 'apollo-angular';
import {NoteInterface} from "../interfaces/note.interface";
import gql from "graphql-tag";

@Injectable({providedIn: "root"})

export class GetNotesQl extends Query<{ getNotes: NoteInterface[] }> {
  override document = gql`
  query notes {
    getNotes{
    id
    title
    text
    updateDate
    createDate
    }
  }`
}
