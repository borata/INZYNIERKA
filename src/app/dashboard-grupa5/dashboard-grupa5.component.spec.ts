import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrupa5Component } from './dashboard-grupa5.component';

describe('DashboardGrupa5Component', () => {
  let component: DashboardGrupa5Component;
  let fixture: ComponentFixture<DashboardGrupa5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGrupa5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGrupa5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
