import { Component, Input } from '@angular/core';
import { ButtonRole } from '../../core/enums/buttonRole.enum';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() idRole: number | undefined;
  @Input() label: string | undefined;

  buttonRole = ButtonRole;

  // constructor() {}
}
