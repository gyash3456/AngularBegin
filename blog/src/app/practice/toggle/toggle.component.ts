import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <h1>
      toggle works!
</h1>

<button (click)="toggle()">Toggle Button</button>
<h2 *ngIf="display">Element to be toggled</h2>




  `,
  styles: [
  ]
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display=false;
  toggle(){
    this.display=!this.display;
  }

}
