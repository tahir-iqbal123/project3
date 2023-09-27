import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification4Component } from './notification4.component';

describe('Notification4Component', () => {
  let component: Notification4Component;
  let fixture: ComponentFixture<Notification4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Notification4Component]
    });
    fixture = TestBed.createComponent(Notification4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
