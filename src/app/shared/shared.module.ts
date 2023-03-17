import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Search, Plus, Save, X } from 'angular-feather/icons';

import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputTextComponent } from './custom-input-text/custom-input-text.component';

const icons = {
  Search,
  Plus,
  Save,
  X,
};

@NgModule({
  declarations: [CustomButtonComponent, CustomInputTextComponent],
  exports: [CustomButtonComponent, FeatherModule, CustomInputTextComponent],
  imports: [CommonModule, FeatherModule.pick(icons)],
})
export class SharedModule {}
