import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { methods } from 'src/app/utils/Func';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private services: ServiceService) {}
  private formServiceBuilder = inject(FormBuilder);
  protected router = inject(Router);

  name: string = 'update';
  className: string = 'button4';
  status: boolean | undefined;
  path: string = 'parking/signup';

  @ViewChild('eye') show!: any;
  @ViewChild('eyeSlash') hide!: any;
  @ViewChild('eyes') shows!: any;
  @ViewChild('eyesSlash') hides!: any;
  @ViewChild('password') pwd!: any;
  @ViewChild('newpassword') newPwd!: any;

  ngOnInit(): void {}

  protected form = this.formServiceBuilder.group({
    email: [''],
    password: [''],
    newPassword: [''],
  });

  @Input() onUpdatePassword = () => {
    const { email, password, newPassword } = this.form.value;
    if (!email || !password || !newPassword) {
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

    this.services
      .OnUpdate({
        email: email,
        password: password,
        newPassword: newPassword,
      })
      .subscribe((update) => {
        if (!localStorage.getItem('token')) {
          localStorage.setItem('token', update.Token);

          this.status = true;
          if (localStorage.getItem('token')) {
            setTimeout(() => {
              this.router.navigate(['dashboard']);
            }, 3000);
          }
        }
      });
  };

  onRedirectLogin = () => this.router.navigate(['signup']);

  onShowHideLastPassword() {
    if (this.shows.changeDetector._lView[0].className == 'eye') {
      this.shows.changeDetector._lView[0].removeAttribute('class');
      this.shows.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.hides.changeDetector._lView[0].removeAttribute('class');
      this.hides.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.pwd);
    } else {
      this.hides.changeDetector._lView[0].removeAttribute('class');
      this.hides.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.shows.changeDetector._lView[0].removeAttribute('class');
      this.shows.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.pwd);
    }
  }

  onShowHideNewPassword() {
    if (this.show.changeDetector._lView[0].className == 'eye') {
      this.show.changeDetector._lView[0].removeAttribute('class');
      this.show.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.hide.changeDetector._lView[0].removeAttribute('class');
      this.hide.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.newPwd);
    } else {
      this.hide.changeDetector._lView[0].removeAttribute('class');
      this.hide.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.show.changeDetector._lView[0].removeAttribute('class');
      this.show.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.newPwd);
    }
  }
}
