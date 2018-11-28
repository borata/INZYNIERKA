import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrupa3Component } from './dashboard-grupa3.component';

describe('DashboardGrupa3Component', () => {
  let component: DashboardGrupa3Component;
  let fixture: ComponentFixture<DashboardGrupa3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGrupa3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGrupa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
