import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup}from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    user:new FormControl(''),
    password: new FormControl('')

  })
  getFormData(){
    console.warn(this.loginForm.value);
  }

}
