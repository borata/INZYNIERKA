import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkietyComponent } from './ankiety.component';

describe('AnkietyComponent', () => {
  let component: AnkietyComponent;
  let fixture: ComponentFixture<AnkietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnkietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
