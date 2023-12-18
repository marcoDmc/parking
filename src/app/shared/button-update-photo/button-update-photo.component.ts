import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-update-photo',
  templateUrl: './button-update-photo.component.html',
  styleUrls: ['./button-update-photo.component.scss'],
})
export class ButtonUpdatePhotoComponent {
  @Input() name: string = '';
  @Input() className: string = '';
  @Input() Func() {}
}
