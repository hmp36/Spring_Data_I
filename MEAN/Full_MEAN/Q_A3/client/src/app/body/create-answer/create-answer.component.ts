import { Component, OnInit } from '@angular/core';
import { Answer } from '../../server/models/answer';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../../server/controllers/answer.service';
import { QuestionService } from '../../server/controllers/question.service';
import { Question } from '../../server/models/question';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {

  newAnswer: Answer = new Answer;
  question_id;
  question: Question = new Question;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _answerService: AnswerService,
    private _questionService: QuestionService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.question_id = params.id)
    this.getQuestion
    this.getQuestion()
  }
  getQuestion(){
    console.log(this.question_id)
    this._questionService.getOneQuestion(this.question_id).subscribe(
      (res) => {
        this.question = res.json();
      }
    )
  }
  createAnswer(){
    this._answerService.createAnswer(this.question_id, this.newAnswer).subscribe(
      (res) => {
        console.log(res.json())
        this._router.navigateByUrl('/dashboard')
      }
    )
  }

}
