import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private router: Router) {}

  onRedirectLoginPage(): void {
    this.router.navigate(['signin']);
  }

  onRedirectDashboard(): void {
    this.router.navigate(['app']);
  }
  onRedirectAbout(): void {
    this.router.navigate(['about']);
  }
}
