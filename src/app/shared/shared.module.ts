import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Search, Plus, Save, X, Edit, Trash } from 'angular-feather/icons';

import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputTextComponent } from './custom-input-text/custom-input-text.component';
import { CustomInputRangeComponent } from './custom-input-range/custom-input-range.component';
import { FormsModule } from '@angular/forms';

const icons = {
  Search,
  Plus,
  Save,
  X,
  Edit,
  Trash,
};

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomInputTextComponent,
    CustomInputRangeComponent,
  ],
  exports: [
    CustomButtonComponent,
    FeatherModule,
    CustomInputTextComponent,
    CustomInputRangeComponent,
  ],
  imports: [CommonModule, FeatherModule.pick(icons), FormsModule],
})
export class SharedModule {}
