import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiScrumComponent } from './wiki-scrum.component';

describe('WikiScrumComponent', () => {
  let component: WikiScrumComponent;
  let fixture: ComponentFixture<WikiScrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiScrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
