import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajInfo5Component } from './dodaj-info5.component';

describe('DodajInfo5Component', () => {
  let component: DodajInfo5Component;
  let fixture: ComponentFixture<DodajInfo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajInfo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajInfo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
