import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGroupComponent } from './filter-group.component';
import { CustomInputTextComponent } from '../../../../shared/custom-input-text/custom-input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { Edit, Plus, Save, Search, Trash, X } from 'angular-feather/icons';

describe('FilterGroupComponent', () => {
  let component: FilterGroupComponent;
  let fixture: ComponentFixture<FilterGroupComponent>;

  const icons = {
    Search,
    Plus,
    Save,
    X,
    Edit,
    Trash,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FeatherModule.pick(icons)],
      declarations: [FilterGroupComponent, CustomInputTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
