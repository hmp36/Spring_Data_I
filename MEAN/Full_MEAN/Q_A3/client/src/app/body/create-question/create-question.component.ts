import { Component, OnInit } from '@angular/core';
import { Question } from '../../server/models/question';
import { QuestionService } from '../../server/controllers/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  newQuestion: Question = new Question;

  constructor(
    private _router: Router,
    private _quetionService: QuestionService
  ) { }

  ngOnInit() {
  }

  createQuestion(){
    this._quetionService.createQuestion(this.newQuestion).subscribe(
      (res) => {
        console.log(res.json())
        this._router.navigateByUrl('/dashboard')
      }
    )
  }
}
