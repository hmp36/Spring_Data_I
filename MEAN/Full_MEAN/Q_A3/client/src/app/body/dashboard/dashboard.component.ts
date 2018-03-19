import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../server/controllers/user.service';
import { Http } from '@angular/http';
import { User } from '../../server/models/user';
import { Question } from '../../server/models/question';
import { QuestionService } from '../../server/controllers/question.service';
import { AnswerService } from '../../server/controllers/answer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  questions: Question[];
 
  constructor(
    private _http: Http,
    private _router: Router,
    private _userService: UserService,
    private _questionService:QuestionService,
    private _answerService: AnswerService

  ) {
  }
  
  ngOnInit() {

    this.allQuestions()
  }

  allQuestions() {
    console.log(this._userService);
    this._questionService.getQuestions().subscribe(
      res => {
        this.questions = res.json()
      }
    )
  }
  
 
 
 

}
