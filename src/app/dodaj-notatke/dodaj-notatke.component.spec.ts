import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajNotatkeComponent } from './dodaj-notatke.component';

describe('DodajNotatkeComponent', () => {
  let component: DodajNotatkeComponent;
  let fixture: ComponentFixture<DodajNotatkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajNotatkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajNotatkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
