import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification3Component } from './notification3.component';

describe('Notification3Component', () => {
  let component: Notification3Component;
  let fixture: ComponentFixture<Notification3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Notification3Component]
    });
    fixture = TestBed.createComponent(Notification3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
