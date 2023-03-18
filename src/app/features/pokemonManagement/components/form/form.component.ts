import { Component, Input } from '@angular/core';
import { FormStatus } from '../../../../core/enums/formStatus';
import { InputRole } from '../../../../core/enums/inputRole.enum';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() idRole = 1;

  formStatus = FormStatus;
  inputRole = InputRole;
  buttonRole = ButtonRole;
}
