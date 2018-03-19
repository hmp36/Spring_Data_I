import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { Router } from '@angular/router';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errors: string[] = [];

  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }
  userLogin(){
    this._userService.login(this.user, (res) => {
      if(res.json().errors){
        console.log(res.json())
      }else{
        this._router.navigateByUrl('/dashboard')
      }
    })
      
    
  }

}
