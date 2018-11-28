import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGrupa5Component } from './info-grupa5.component';

describe('InfoGrupa5Component', () => {
  let component: InfoGrupa5Component;
  let fixture: ComponentFixture<InfoGrupa5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGrupa5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGrupa5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
