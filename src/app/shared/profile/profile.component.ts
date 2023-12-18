import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: string = 'frankie sullivan';
  email: string = 'frankie@untitledui.com';

  @Input() image: any;
  @Input() Profile = (): any => {};
  @Input() Notifications = (): any => {};
  @Input() Help = (): any => {};
  @Input() Settings = (): any => {};

  ngOnInit(): void {
    if (localStorage.getItem('email')) {
      this.email = String(localStorage.getItem('email'));
    }
    if (localStorage.getItem('nickname')) {
      this.name = String(localStorage.getItem('nickname'));
    }
  }
  protected router = inject(Router);

  onRedirectApp() {
    localStorage.clear();
    this.router.navigate(['parking/home']);
  }

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

  onRedirectProfileSettings = () => this.router.navigate(['dashboard/profile']);
}
