import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrupa2Component } from './dashboard-grupa2.component';

describe('DashboardGrupa2Component', () => {
  let component: DashboardGrupa2Component;
  let fixture: ComponentFixture<DashboardGrupa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGrupa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGrupa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
