import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxOptionComponent } from './check-box-option.component';

describe('CheckBoxOptionComponent', () => {
  let component: CheckBoxOptionComponent;
  let fixture: ComponentFixture<CheckBoxOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
