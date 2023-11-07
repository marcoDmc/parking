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

  onRedirectLoginPage = () => this.router.navigate(['signin']);

  onRedirectDashboard = () => this.router.navigate(['app']);

  onRedirectAbout = () => this.router.navigate(['about']);

  onRedirectHome = () => this.router.navigate(['home']);

  onRedirectHelp = () => this.router.navigate(['help']);

  onRedirectContact = () => this.router.navigate(['contact']);

  ngOnInit = () => this.Login.emit(this.onRedirectLoginPage);
}
