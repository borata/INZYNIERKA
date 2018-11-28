import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrupa6Component } from './dashboard-grupa6.component';

describe('DashboardGrupa6Component', () => {
  let component: DashboardGrupa6Component;
  let fixture: ComponentFixture<DashboardGrupa6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGrupa6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGrupa6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
