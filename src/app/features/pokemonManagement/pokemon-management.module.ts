import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGroupComponent } from './components/filter-group/filter-group.component';
import { PokemonManagementComponent } from './pages/pokemon-management/pokemon-management.component';
import { SharedModule } from '../../shared/shared.module';
import { ActionsHeaderComponent } from './components/actions-header/actions-header.component';

@NgModule({
  declarations: [
    FilterGroupComponent,
    PokemonManagementComponent,
    ActionsHeaderComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [PokemonManagementComponent],
})
export class PokemonManagementModule {}
