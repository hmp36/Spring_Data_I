import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Http } from '@angular/http';

@Injectable()
export class AnswerService {

  constructor(
    private _http: Http
  ) { }
  createAnswer(id,answer){
    return this._http.post(`/answer/create/${id}`, answer);
  }
  likeAnswer(id){
    return this._http.post(`/answer/like/${id}`,id)
  }

}
