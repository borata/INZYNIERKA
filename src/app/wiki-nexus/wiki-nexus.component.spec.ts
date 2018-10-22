import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiNexusComponent } from './wiki-nexus.component';

describe('WikiNexusComponent', () => {
  let component: WikiNexusComponent;
  let fixture: ComponentFixture<WikiNexusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiNexusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiNexusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
