import { Component, OnInit } from '@angular/core';
import{UserService} from "../user/user.service";
import{Router} from "@angular/router";


@Component({
  selector: 'DashboardComponent',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private user:any; 
  constructor(private _us:UserService, private _router:Router) {

   }

  ngOnInit() {
      this._us.session((data)=>{
        console.log(data); 
        if(data.errors){
          this._router.navigate(["/register"]);
          }else{
              this.user = data;
     
          }  
        });
    }
}
