import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EQuestion } from './question';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private _url: string = "/assets/data/questions.json";

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<EQuestion[]> {
    return this.http.get<EQuestion[]>(this._url);
  }
}
