import { Injectable } from '@angular/core';
import { Question } from "../models/question";
import { Http } from '@angular/http';

@Injectable()
export class QuestionService {

  constructor(
    private _http: Http
  ) { }
  getQuestions(){
    return this._http.get("/questions");
  }
  createQuestion(question){
    return this._http.post("/question/create", question);
  }
  getOneQuestion(id){
    return this._http.get(`/question/answer/${id}`);
  }

}
