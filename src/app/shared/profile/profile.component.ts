import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  protected router = inject(Router);

  onOpenAndClosed(popup: Element): void {
    console.log(popup.className);

    if (popup.className == 'popup') {
      popup.removeAttribute('class');
      popup.setAttribute('class', 'popup_none');
    } else {
      popup.removeAttribute('class');
      popup.setAttribute('class', 'popup');
    }
  }

  onRedirectProfileSettings = () => this.router.navigate(['settings/profile']);
}
