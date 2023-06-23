import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O3Component } from './o3.component';

describe('O3Component', () => {
  let component: O3Component;
  let fixture: ComponentFixture<O3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [O3Component]
    });
    fixture = TestBed.createComponent(O3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
