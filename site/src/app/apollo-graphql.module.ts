import { NgModule } from "@angular/core"
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular"
import { HttpLink } from "apollo-angular/http"
import { HttpClientModule } from "@angular/common/http"
import { InMemoryCache } from "@apollo/client/core"

const uri = "http://localhost:3000/graphql"

@NgModule({
  declarations: [],
  imports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri,
          }),
        }
      },
      deps: [HttpLink],
    },
  ],
  exports: [ApolloModule],
})
export class ApolloGraphqlModule {}
