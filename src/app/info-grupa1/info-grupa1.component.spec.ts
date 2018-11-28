import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGrupa1Component } from './info-grupa1.component';

describe('InfoGrupa1Component', () => {
  let component: InfoGrupa1Component;
  let fixture: ComponentFixture<InfoGrupa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGrupa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGrupa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
