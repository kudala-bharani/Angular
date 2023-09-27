import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpComponentComponent } from './exp-component.component';

describe('ExpComponentComponent', () => {
  let component: ExpComponentComponent;
  let fixture: ComponentFixture<ExpComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpComponentComponent]
    });
    fixture = TestBed.createComponent(ExpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
