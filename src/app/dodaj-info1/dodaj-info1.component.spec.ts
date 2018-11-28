import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajInfo1Component } from './dodaj-info1.component';

describe('DodajInfo1Component', () => {
  let component: DodajInfo1Component;
  let fixture: ComponentFixture<DodajInfo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajInfo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
