import { Component, OnInit } from '@angular/core';
import { UserService } from './../user/user.service';
import { Question } from '../all-questions/question';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
  questions: Question[];
  // questions: Array<question>;
  contactdetails: Question;
  str;
  strsearch; currentUser;
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.strsearch = '';
    this.getAllQuestions();
  }

  getAllQuestions() {
    this._userService.getAllQuestions((questions) => this.questions = questions);
  }

  contact(contactdetails) {
    console.log('i am in contact');
    console.log(contactdetails);
    alert('hello');
  }


}