import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuestionsComponent } from './create-answer.component';

describe('AllQuestionsComponent', () => {
  let component: AllQuestionsComponent;
  let fixture: ComponentFixture<AllQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
