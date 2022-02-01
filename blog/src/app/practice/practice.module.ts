import { Input, NgModule } from '@angular/core';
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
    ReactiveFormsModule
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
