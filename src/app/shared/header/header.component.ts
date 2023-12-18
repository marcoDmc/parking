import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  protected router = inject(Router);

  @Output() Login: EventEmitter<any> = new EventEmitter();
  @ViewChild('menu') menu!: any;
  menuToggle: boolean = false;

  onRedirectLoginPage = () => this.router.navigate(['parking/signin']);

  onRedirectDashboard = () => this.router.navigate(['dashboard']);

  onRedirectAbout = () => this.router.navigate(['parking/about']);

  onRedirectHome = () => this.router.navigate(['parking/home']);

  onRedirectHelp = () => this.router.navigate(['parking/help']);

  onRedirectContact = () => this.router.navigate(['parking/contact']);

  ngOnInit = () => {
    this.Login.emit(this.onRedirectLoginPage);
  };

  onSetActiveMenu = () => {
    this.menuToggle = !this.menuToggle;
    console.log(this.menuToggle);

    if (this.menuToggle) {
      this.menu.nativeElement.removeAttribute('class');
      this.menu.nativeElement.setAttribute('class', 'hamburguer_open');
    } else {
      this.menu.nativeElement.removeAttribute('class');
      this.menu.nativeElement.setAttribute('class', 'hamburguer');
    }
  };
}
