import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { PracticeModule } from './practice/practice.module';
// import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/translate/','.json');
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PracticeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en-US',
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
