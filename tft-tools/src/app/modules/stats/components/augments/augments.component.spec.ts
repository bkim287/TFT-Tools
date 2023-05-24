import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentsComponent } from './augments.component';

describe('AugmentsComponent', () => {
  let component: AugmentsComponent;
  let fixture: ComponentFixture<AugmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AugmentsComponent]
    });
    fixture = TestBed.createComponent(AugmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
