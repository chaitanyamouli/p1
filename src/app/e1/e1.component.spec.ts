import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E1Component } from './e1.component';

describe('E1Component', () => {
  let component: E1Component;
  let fixture: ComponentFixture<E1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E1Component]
    });
    fixture = TestBed.createComponent(E1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
