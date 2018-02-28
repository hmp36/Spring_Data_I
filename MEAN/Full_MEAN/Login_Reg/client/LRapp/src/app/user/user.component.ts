import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'UserComponent',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private user: any; 
private loggedUser:any;
  constructor(private _us: UserService, private _router: Router) {

  }

  init(){
      this.user ={
          firstName : "",
          lastName: "",
          email: "",
          password: "",
          errors:[]
            
      };
      this.loggedUser={
          email:"",
          password:"",
          errors:""
      }
  }
   
  register() {
      this._us.register(this.user, (data) => {
          if (data.errors) {
               

               let errs = [];

               for(let err in data.errors){
                  errs.push(
                      data.errors[err] 
                  );
               }
               
               this.user.errors = errs;
          }else{
            this.init();
            this._router.navigate(['/dashboard']);
      }
    });
  }  
    login(){
      this._us.login(this.loggedUser,(data)=>{
          if(data.errors){
              this.loggedUser.errors = data.errors;

          }else{
              this.init();
              this._router.navigate(["/dashboard"]);  
          }
        });    
    }      
    ngOnInit() {
        this.init();
        this._us.logout();  
    }
}

