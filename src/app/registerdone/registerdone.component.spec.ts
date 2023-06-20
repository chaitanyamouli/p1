import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdoneComponent } from './registerdone.component';

describe('RegisterdoneComponent', () => {
  let component: RegisterdoneComponent;
  let fixture: ComponentFixture<RegisterdoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterdoneComponent]
    });
    fixture = TestBed.createComponent(RegisterdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
