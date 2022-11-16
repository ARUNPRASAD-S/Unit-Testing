// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { NgForm, ReactiveFormsModule } from "@angular/forms"
import { LoginService } from "../login.service"
import { LoginComponent } from "./login.component"

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
let fixture:ComponentFixture<LoginComponent>;
let component:LoginComponent;
describe('LOGIN FORM UNIT TESTING',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations:[LoginComponent],
      providers:[LoginService]
    }).compileComponents();
  })
  it("user name is empty",()=>{
    fixture=TestBed.createComponent(LoginComponent);
    component=fixture.componentInstance;
    component.username="kannanssap@gmail.com";
    component.password="test";
    component.onLoginClick(new NgForm([],[]));
    expect(component.loginService.isUserEmpty).toBe(true);
  })
})