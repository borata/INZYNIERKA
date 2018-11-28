import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGrupa6Component } from './info-grupa6.component';

describe('InfoGrupa6Component', () => {
  let component: InfoGrupa6Component;
  let fixture: ComponentFixture<InfoGrupa6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGrupa6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGrupa6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
