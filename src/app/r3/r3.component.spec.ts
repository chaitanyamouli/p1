import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R3Component } from './r3.component';

describe('R3Component', () => {
  let component: R3Component;
  let fixture: ComponentFixture<R3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [R3Component]
    });
    fixture = TestBed.createComponent(R3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
