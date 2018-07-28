import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForQuoteComponent } from './ask-for-quote.component';

describe('AskForQuoteComponent', () => {
  let component: AskForQuoteComponent;
  let fixture: ComponentFixture<AskForQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskForQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
