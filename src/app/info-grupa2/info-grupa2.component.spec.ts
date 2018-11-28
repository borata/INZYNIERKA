import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGrupa2Component } from './info-grupa2.component';

describe('InfoGrupa2Component', () => {
  let component: InfoGrupa2Component;
  let fixture: ComponentFixture<InfoGrupa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGrupa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGrupa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
