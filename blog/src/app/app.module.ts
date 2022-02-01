import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PracticeModule } from './practice/practice.module';
// import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PracticeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
