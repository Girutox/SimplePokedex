import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input-range',
  templateUrl: './custom-input-range.component.html',
  styleUrls: ['./custom-input-range.component.scss'],
})
export class CustomInputRangeComponent {
  @Input() label: string | undefined;
  @Input() name: string | undefined;
  @Input() minValue: number | undefined;
  @Input() maxValue: number | undefined;
}
