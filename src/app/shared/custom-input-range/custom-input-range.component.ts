import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input-range',
  templateUrl: './custom-input-range.component.html',
  styleUrls: ['./custom-input-range.component.scss'],
})
export class CustomInputRangeComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() minValue = 0;
  @Input() maxValue = 50;

  value = 50;
}
