import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingMethodsComponent } from './printing-methods.component';

describe('PrintingMethodsComponent', () => {
  let component: PrintingMethodsComponent;
  let fixture: ComponentFixture<PrintingMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
