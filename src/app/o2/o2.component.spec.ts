import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O2Component } from './o2.component';

describe('O2Component', () => {
  let component: O2Component;
  let fixture: ComponentFixture<O2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [O2Component]
    });
    fixture = TestBed.createComponent(O2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
