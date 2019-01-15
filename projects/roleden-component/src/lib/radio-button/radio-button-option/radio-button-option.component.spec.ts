import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonOptionComponent } from './radio-button-option.component';

describe('RadioButtonOptionComponent', () => {
  let component: RadioButtonOptionComponent;
  let fixture: ComponentFixture<RadioButtonOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
