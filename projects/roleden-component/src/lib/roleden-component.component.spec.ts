import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoledenComponentComponent } from './roleden-component.component';

describe('RoledenComponentComponent', () => {
  let component: RoledenComponentComponent;
  let fixture: ComponentFixture<RoledenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoledenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoledenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
