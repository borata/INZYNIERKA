import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGrupa3Component } from './info-grupa3.component';

describe('InfoGrupa3Component', () => {
  let component: InfoGrupa3Component;
  let fixture: ComponentFixture<InfoGrupa3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGrupa3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGrupa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
