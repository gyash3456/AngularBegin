import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayvalue=0;
  count =0;
  getcount(name:string){
    if (name=='add'){
      this.count++;
    }
      else {this.count--};
      this.displayvalue=this.count;

    }
  }

