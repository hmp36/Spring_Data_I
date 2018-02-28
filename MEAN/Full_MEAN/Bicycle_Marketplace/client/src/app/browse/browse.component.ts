import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  private text:String;
  
  constructor(private us:UserService, private router:Router){

   }

   ngOnInit() {
        if(!this.us.isValid())
            this.router.navigate(["/register"]);
   }

}
