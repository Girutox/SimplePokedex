import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Plus, Save, X } from 'angular-feather/icons';

import { CustomButtonComponent } from './custom-button/custom-button.component';

const icons = {
  Plus,
  Save,
  X,
};

@NgModule({
  declarations: [CustomButtonComponent],
  exports: [CustomButtonComponent, FeatherModule],
  imports: [CommonModule, FeatherModule.pick(icons)],
})
export class SharedModule {}
