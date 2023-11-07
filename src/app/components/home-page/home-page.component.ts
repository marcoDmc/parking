import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor() {}

  private router = inject(Router);

  @Input() onRedirectLoginPage = () => this.router.navigate(['signin']);

  onRedirectDashboard = () => this.router.navigate(['app']);
}
