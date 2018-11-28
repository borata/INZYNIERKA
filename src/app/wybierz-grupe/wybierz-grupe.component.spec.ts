import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WybierzGrupeComponent } from './wybierz-grupe.component';

describe('WybierzGrupeComponent', () => {
  let component: WybierzGrupeComponent;
  let fixture: ComponentFixture<WybierzGrupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WybierzGrupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WybierzGrupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
