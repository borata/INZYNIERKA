import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrupa1Component } from './dashboard-grupa1.component';

describe('DashboardGrupa1Component', () => {
  let component: DashboardGrupa1Component;
  let fixture: ComponentFixture<DashboardGrupa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGrupa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGrupa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
