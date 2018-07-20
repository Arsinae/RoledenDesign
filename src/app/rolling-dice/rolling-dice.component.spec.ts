import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingDiceComponent } from './rolling-dice.component';

describe('RollingDiceComponent', () => {
  let component: RollingDiceComponent;
  let fixture: ComponentFixture<RollingDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
