import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDataPage } from './info-data.page';

describe('InfoDataPage', () => {
  let component: InfoDataPage;
  let fixture: ComponentFixture<InfoDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
