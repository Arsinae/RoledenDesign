import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlippingCardComponent } from './flipping-card.component';

describe('FlippingCardComponent', () => {
  let component: FlippingCardComponent;
  let fixture: ComponentFixture<FlippingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlippingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlippingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
