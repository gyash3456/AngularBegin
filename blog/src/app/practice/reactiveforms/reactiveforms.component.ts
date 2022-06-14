import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private translateService:TranslateService  ) { }
  public selectLanguage(event:any){
    this.translateService.use(event.target.value);
  }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])

  })
  getFormData(){
    console.warn(this.loginForm.value);
  }
  get user1(){
    return this.loginForm.get('user')
  }
  get email1(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password');
  }

}
