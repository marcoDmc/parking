import { Component, ViewChild, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  @ViewChild('eye') show!: any;
  @ViewChild('eyeSlash') hide!: any;

  private formServiceBuilder = inject(FormBuilder);

  protected router = inject(Router);

  protected form = this.formServiceBuilder.group({
    email: [''],
    password: [''],
    checkbox: [false],
  });

  onLogin = () => {};

  onRedirectSignup = () => this.router.navigate(['signup']);

  onShowHidePassword() {
    if (this.show.changeDetector._lView[0].className == 'eye') {
      this.show.changeDetector._lView[0].removeAttribute('class');
      this.show.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.hide.changeDetector._lView[0].removeAttribute('class');
      this.hide.changeDetector._lView[0].setAttribute('class', 'eye');
    } else {
      this.hide.changeDetector._lView[0].removeAttribute('class');
      this.hide.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.show.changeDetector._lView[0].removeAttribute('class');
      this.show.changeDetector._lView[0].setAttribute('class', 'eye');
    }
  }
}
