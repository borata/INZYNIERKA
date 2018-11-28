import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajInfo6Component } from './dodaj-info6.component';

describe('DodajInfo6Component', () => {
  let component: DodajInfo6Component;
  let fixture: ComponentFixture<DodajInfo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajInfo6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajInfo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
