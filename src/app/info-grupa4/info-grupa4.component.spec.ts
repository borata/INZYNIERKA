import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGrupa4Component } from './info-grupa4.component';

describe('InfoGrupa4Component', () => {
  let component: InfoGrupa4Component;
  let fixture: ComponentFixture<InfoGrupa4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGrupa4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGrupa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
