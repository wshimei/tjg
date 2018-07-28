import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public questions = [];

  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this._questionService.getQuestions()
        .subscribe(data => this.questions = data);
  }

  // isClicked() {
  //   console.log($('card-header').attr('class'));
  // }

}
