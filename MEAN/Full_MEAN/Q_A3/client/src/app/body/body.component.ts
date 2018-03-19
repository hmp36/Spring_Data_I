import { Component, OnInit } from '@angular/core';
import { User } from '../server/models/user';
import { Http } from '@angular/http';
import { UserService } from '../server/controllers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  currentUser: User = null;
  
  constructor(
    private _http: Http,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUserSession()
  }
  getUserSession() {
    this._userService.getCurrentUser().subscribe(
      res =>{
        this.currentUser = res.json();
        if(this.currentUser == null){
          this._router.navigateByUrl('/');
        }
      }
    )
  }
  logout() {
    this._userService.logout().subscribe(
      res =>{
        this.currentUser = null
      }
    )
  }

}
