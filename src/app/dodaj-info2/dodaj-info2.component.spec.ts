import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajInfo2Component } from './dodaj-info2.component';

describe('DodajInfo2Component', () => {
  let component: DodajInfo2Component;
  let fixture: ComponentFixture<DodajInfo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajInfo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
