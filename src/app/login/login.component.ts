import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!:FormGroup;
  username!:any;
  password!:any;

  constructor(private fb:FormBuilder,public loginService:LoginService) {
    this.formLogin=this.fb.group({
      username:[''],
      password:['']
    });
   }

  ngOnInit(): void {
  }
onLoginClick(formLogin:any){
  this.loginService.loginstatus=this.loginService.checkuserlogin(this.username,this.password)
}  

}
