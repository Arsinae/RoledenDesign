import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDataComponent } from './carousel-data.component';

describe('CarouselDataComponent', () => {
  let component: CarouselDataComponent;
  let fixture: ComponentFixture<CarouselDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
