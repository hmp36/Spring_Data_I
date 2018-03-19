import { Component, OnInit } from '@angular/core';
import { Question } from '../../server/models/question';
import { Router } from '@angular/router';
import { QuestionService } from '../../server/controllers/question.service';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../../server/controllers/answer.service';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {

  question: Question = new Question;
  answers;
  question_id;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _questionService: QuestionService,
    private _answerService: AnswerService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.question_id = params.id)
    this.getQuestion()
  }
  getQuestion(){
    console.log(this.question_id);
    this._questionService.getOneQuestion(this.question_id).subscribe(
      (res) => {
        this.answers = res.json()._answer.sort((obj1, obj2) => {
          return obj2.likes - obj1.likes;
        })
        this.question = res.json();
      }
    )
  }
  likeAnswer(id){
    this._answerService.likeAnswer(id).subscribe(
      (res) => {
        console.log("you should see this");
        this.getQuestion();
      }
    )
  }
}
