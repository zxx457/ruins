import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { ApolloGraphqlModule } from "./apollo-graphql.module"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { GallaryModule } from "./module/gallary/gallary.module"
import { MainModule } from "./module/main/main.module"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    GallaryModule,
    ApolloGraphqlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
