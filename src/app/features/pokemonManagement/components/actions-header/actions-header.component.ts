import { Component } from '@angular/core';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';

@Component({
  selector: 'app-actions-header',
  templateUrl: './actions-header.component.html',
  styleUrls: ['./actions-header.component.scss'],
})
export class ActionsHeaderComponent {
  buttonRole = ButtonRole;
}
