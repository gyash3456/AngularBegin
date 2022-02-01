import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  template: `
    <p>
      if-else works!
    </p>
    <h1 *ngIf="show">  Code Step By Step</h1>

    <!-- if-lelse usage -->
    <h1 *ngIf="show; then ifBlock else elseBlock"></h1>
    <ng-template #ifBlock>
      <h1>If condition is true</h1>
    </ng-template>
    <ng-template #elseBlock>
      <h1>Else is running</h1>
    </ng-template>

    <!-- multiple if else -->
    <ng-template [ngIf]="color==='green'">
      <h1 style="color:green">Green Color</h1>
    </ng-template>

    <!-- switch case -->
    <div [ngSwitch]="color" >
      <h1 *ngSwitchCase="'red'" style='color:red;'>Red color</h1>
      <h1 *ngSwitchCase="'green'" style='color:green;'>green color</h1>
      <h1 *ngSwitchDefault>Unknown color</h1>
    </div>







  `,
  styles: [
  ]
})
export class IfElseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show=true; 
  color='g';
  

}
