import { Component, Input } from '@angular/core';
import { InputRole } from '../../core/enums/inputRole.enum';

@Component({
  selector: 'app-custom-input-text',
  templateUrl: './custom-input-text.component.html',
  styleUrls: ['./custom-input-text.component.scss'],
})
export class CustomInputTextComponent {
  @Input() idRole = 1;
  @Input() label = '';
  @Input() name = '';
  @Input() placeHolder = '';

  inputRole = InputRole;
}
