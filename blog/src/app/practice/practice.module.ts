import { Input, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { IfElseComponent } from './if-else/if-else.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { TodoComponent } from './todo/todo.component';
import { ChildComponent } from './child/child.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/translate/','.json');
}

@NgModule({
  declarations: [
    CounterComponent,
    IfElseComponent,
    FormsComponent,
    ToggleComponent,
    TodoComponent,
    ChildComponent,
    ReactiveformsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage:'en-US',
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }) 
  ],
  exports:[
    CounterComponent,
    IfElseComponent,
    FormsComponent,
    ToggleComponent,
    TodoComponent,
    ChildComponent,
    ReactiveformsComponent
  ]
})
export class PracticeModule { }
