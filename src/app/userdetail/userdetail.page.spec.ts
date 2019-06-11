import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailPage } from './userdetail.page';

describe('UserdetailPage', () => {
  let component: UserdetailPage;
  let fixture: ComponentFixture<UserdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
