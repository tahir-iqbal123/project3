import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search2wayComponent } from './search2way.component';

describe('Search2wayComponent', () => {
  let component: Search2wayComponent;
  let fixture: ComponentFixture<Search2wayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Search2wayComponent]
    });
    fixture = TestBed.createComponent(Search2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
