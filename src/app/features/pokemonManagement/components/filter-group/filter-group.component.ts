import { Component } from '@angular/core';
import { InputRole } from '../../../../core/enums/inputRole.enum';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss'],
})
export class FilterGroupComponent {
  inputRole = InputRole;
}
