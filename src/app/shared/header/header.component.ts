import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  protected router = inject(Router);

  @Output() Login: EventEmitter<any> = new EventEmitter();

  onRedirectLoginPage(): void {
    this.router.navigate(['signin']);
  }

  onRedirectDashboard(): void {
    this.router.navigate(['app']);
  }
  onRedirectAbout(): void {
    this.router.navigate(['about']);
  }

  onRedirectHome = () => this.router.navigate(['home']);

  
  ngOnInit(): void {
    this.Login.emit(this.onRedirectLoginPage);
  }
}
