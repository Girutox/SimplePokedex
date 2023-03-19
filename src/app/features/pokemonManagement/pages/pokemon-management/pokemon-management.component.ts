import { Component, ViewChild } from '@angular/core';
import { ItemsGridComponent } from '../../components/items-grid/items-grid.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-pokemon-management',
  templateUrl: './pokemon-management.component.html',
  styleUrls: ['./pokemon-management.component.scss'],
})
export class PokemonManagementComponent {
  @ViewChild('grid') itemsGridComponent: ItemsGridComponent | undefined;
  @ViewChild('form') formComponent: FormComponent | undefined;

  test(): void {
    this.formComponent?.onEdit({
      id: 1,
      name: 'POKEMON1',
      image: 'TEST',
      attack: 1,
      defense: 1,
      hp: 1,
      type: 'TEST',
    });
  }
}
