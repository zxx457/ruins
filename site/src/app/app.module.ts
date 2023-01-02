import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallaryModule } from './module/gallary/gallary.module';
import { MainModule } from './module/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    GallaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
