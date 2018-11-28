import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrupa4Component } from './dashboard-grupa4.component';

describe('DashboardGrupa4Component', () => {
  let component: DashboardGrupa4Component;
  let fixture: ComponentFixture<DashboardGrupa4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGrupa4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGrupa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
