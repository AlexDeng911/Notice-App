import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GraphqlModule} from "./graphql.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NotesComponent} from "./notes/notes.component";
import {NoteComponent} from "./note/note.component";
import {TagsComponent} from "./tags/tags.component";
import {NoteState} from "./core/state/note.state";
import {environment} from "./environments/environment";
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    GraphqlModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([NoteState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
