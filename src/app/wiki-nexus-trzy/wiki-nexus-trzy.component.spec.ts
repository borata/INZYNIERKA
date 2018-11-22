import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiNexusTrzyComponent } from './wiki-nexus-trzy.component';

describe('WikiNexusTrzyComponent', () => {
  let component: WikiNexusTrzyComponent;
  let fixture: ComponentFixture<WikiNexusTrzyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiNexusTrzyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiNexusTrzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
