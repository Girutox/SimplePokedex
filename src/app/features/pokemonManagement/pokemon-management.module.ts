import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGroupComponent } from './components/filter-group/filter-group.component';
import { PokemonManagementComponent } from './pages/pokemon-management/pokemon-management.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FilterGroupComponent, PokemonManagementComponent],
  imports: [CommonModule, SharedModule],
  exports: [PokemonManagementComponent],
})
export class PokemonManagementModule {}
