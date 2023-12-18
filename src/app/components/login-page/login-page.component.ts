import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { methods } from '../../utils/Func';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private service: ServiceService) {}
  private formServiceBuilder = inject(FormBuilder);
  protected router = inject(Router);

  status: boolean | undefined;

  @ViewChild('eye') show!: any;
  @ViewChild('eyeSlash') hide!: any;
  @ViewChild('email') email!: any;
  @ViewChild('password') pwd!: any;

  ngOnInit(): void {
  }

  protected form = this.formServiceBuilder.group({
    email: [''],
    password: [''],
    checkbox: [false],
  });

  onLogin = () => {
    const { checkbox, email, password } = this.form.value;
    if (!email || !password || !checkbox) {
      this.status = false;
      return;
    }

    if (
      !methods.validateEmail(String(email)) ||
      !methods.validatePassword(String(password))
    ) {
      this.status = false;
      return;
    }
    if (localStorage.getItem('token')) this.router.navigate(['dashboard']);
    else {
      this.service
        .OnLogin(String(email), String(password))
        .subscribe((login) => {
          console.log(login);
          if (!localStorage.getItem('token')) {
            localStorage.setItem('token', login.token);
            localStorage.setItem('nickname', login.nickname);
            localStorage.setItem('email', login.email);

            this.status = true;
            this.router.navigate(['dashboard']);
          }
        });
    }
  };

  onRedirectSignup = () => this.router.navigate(['parking/signup']);

  onShowHidePassword() {
    if (this.show.changeDetector._lView[0].className == 'eye') {
      this.show.changeDetector._lView[0].removeAttribute('class');
      this.show.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.hide.changeDetector._lView[0].removeAttribute('class');
      this.hide.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.pwd);
    } else {
      this.hide.changeDetector._lView[0].removeAttribute('class');
      this.hide.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.show.changeDetector._lView[0].removeAttribute('class');
      this.show.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.pwd);
    }
  }
}
