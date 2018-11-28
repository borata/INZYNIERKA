import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajInfo4Component } from './dodaj-info4.component';

describe('DodajInfo4Component', () => {
  let component: DodajInfo4Component;
  let fixture: ComponentFixture<DodajInfo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajInfo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajInfo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
