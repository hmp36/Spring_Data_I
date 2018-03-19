import { Component, OnInit } from '@angular/core';
import { User } from '../../server/models/user';
import { Router } from '@angular/router';
import { UserService } from '../../server/controllers/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser: User = new User();
  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }
  createUser(){
    this._userService.create(this.newUser).subscribe(
      (res) => {
        console.log(res.json().errors);
        if(res.json().errors == null ){
          console.log("im getting here ;D")
          this._router.navigateByUrl('/dashboard')
        }
      }
    )
  }
}
