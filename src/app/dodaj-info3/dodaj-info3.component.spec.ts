import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajInfo3Component } from './dodaj-info3.component';

describe('DodajInfo3Component', () => {
  let component: DodajInfo3Component;
  let fixture: ComponentFixture<DodajInfo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajInfo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajInfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
