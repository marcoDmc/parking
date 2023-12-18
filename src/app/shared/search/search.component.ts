import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  private router = inject(Router);
  @Input() imageSource: string = '';

  redirectNotifications() {
    this.router.navigate(['dashboard/notification']);
  }
  redirectHelp() {
    this.router.navigate(['dashboard/help']);
  }
  redirectSettings() {
    this.router.navigate(['dashboard/settings']);
  }

  redirectProfile() {
    this.router.navigate(['dashboard/profile']);
  }
}
