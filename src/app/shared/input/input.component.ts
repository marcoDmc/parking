import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: string = '';
  @Input() content: string = '';
  @Input() className: string = '';
  @Input() label: string = '';
}
