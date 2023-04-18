import {ApolloClientOptions, InMemoryCache, split} from "@apollo/client/core";
import {getMainDefinition} from "@apollo/client/utilities";
import {WebSocketLink} from "@apollo/client/link/ws";
import {APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
import {environment} from "./environments/environment";
import {HttpLink} from "apollo-angular/http";
import {NgModule} from "@angular/core";
import {TagComponent} from "./tag/tag.component";

@NgModule({
  exports: [ApolloModule, TagComponent],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink): ApolloClientOptions<any> {
        // Create an http link:
        const http = httpLink.create({
          uri: environment.apiGraphQLURL,
        });

        // Create a WebSocket link:
        const ws = new WebSocketLink({
          uri: environment.websocketGraphQLURL,
          options: {
            reconnect: true,
          },
        });

        // using the ability to split links, you can send data to each link
        // depending on what kind of operation is being sent
        const link = split(
          // split based on operation type
          ({query}) => {
            let definition = getMainDefinition(query);
            return (
              definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
            );
          },
          ws,
          http,
        );

        return {
          link,
          cache: new InMemoryCache()
        };
      },
      deps: [HttpLink],
    },
  ],
  declarations: [
    TagComponent
  ]
})

export class GraphqlModule{

}
