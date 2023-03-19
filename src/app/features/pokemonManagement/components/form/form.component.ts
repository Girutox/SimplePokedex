import { Component, Input } from '@angular/core';
import { FormStatus } from '../../../../core/enums/formStatus';
import { InputRole } from '../../../../core/enums/inputRole.enum';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  pokemonForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.pokemonForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: '',
      attack: 50,
      defense: 50,
    });
  }

  onSubmit(): void {
    console.log(this.pokemonForm.value);
  }
}
