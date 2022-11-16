import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
username!:any;
password!:any;
loginstatus!:any;
isUserEmpty!:boolean;
isPasswordEmpty!:boolean;
isUserandPasswordEmpty!:boolean;
  constructor() { }
  checkuserlogin(username:any,password:any){
    // console.log("serviceusername" + username);
    // console.log("servicepassword" + password);
  if((username=="kannanssap@gmail.com")&&(password=="test")){
    return this.loginstatus=true;
  }
  else if((username=="")&&(password=="test")){
    this.isUserEmpty=true;
    return this.loginstatus=false;
  }
  else if((username!="")&&(password=="")){
    this.isPasswordEmpty=true;
    return this.loginstatus=false;
  }
  else if((username!="")&&(password!="")){
    this.isPasswordEmpty=true;
    return this.loginstatus=false;
  }
  else if((username=="")&&(password=="test")){
    this.isUserEmpty=true;
    return this.loginstatus=false;
  }
  else if((username=="")&&(password=="")){
    this.isUserandPasswordEmpty=true;
    return this.loginstatus=false;
  }
}}


