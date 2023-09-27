import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification2Component } from './notification2.component';

describe('Notification2Component', () => {
  let component: Notification2Component;
  let fixture: ComponentFixture<Notification2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Notification2Component]
    });
    fixture = TestBed.createComponent(Notification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
