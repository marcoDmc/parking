import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor() {}
  openAndClosed(popup: Element): void {
    console.log(popup.className);

    if (popup.className == 'popup') {
      popup.removeAttribute('class');
      popup.setAttribute('class', 'popup_none');
    } else {
      popup.removeAttribute('class');
      popup.setAttribute('class', 'popup');
    }
  }
}
