import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputRangeComponent } from './custom-input-range.component';

describe('CustomInputRangeComponent', () => {
  let component: CustomInputRangeComponent;
  let fixture: ComponentFixture<CustomInputRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomInputRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomInputRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
