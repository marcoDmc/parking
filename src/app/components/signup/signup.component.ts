import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { methods } from '../../utils/Func';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private service: ServiceService) {}
  private formServiveBuilder = inject(FormBuilder);
  private router = inject(Router);

  className: string = 'button1';
  name: string = 'create account';
  status: boolean | undefined;

  @ViewChild('eye') show!: any;
  @ViewChild('eyeSlash') hide!: any;
  @ViewChild('eyes') shows!: any;
  @ViewChild('eyesSlash') hides!: any;
  @ViewChild('password') pwd!: any;
  @ViewChild('passwordConfirm') pwdConfirm!: any;

  ngOnInit(): void {
  }

  protected form = this.formServiveBuilder.nonNullable.group({
    nickname: [''],
    email: [''],
    password: [''],
    address: [''],
    cpf: [''],
    fullname: [''],
    phone: [''],
    confirmPassword: [''],
  });

  @Input() onSignup = () => {
    const {
      nickname,
      address,
      cpf,
      email,
      fullname,
      password,
      phone,
      confirmPassword,
    } = this.form.value;
    if (
      !methods.validatesEmptyFields(
        String(nickname),
        String(email),
        String(password),
        String(address),
        String(cpf),
        String(fullname),
        String(phone)
      ) ||
      password !== confirmPassword
    ) {
      this.status = false;
    } else {
      this.service.OnSignup(this.form.getRawValue()).subscribe((signup) => {
        if (!localStorage.getItem('token')) {
          localStorage.setItem('token', signup.token);
          localStorage.setItem('nickname', signup.nickname);
          localStorage.setItem('email', signup.email);

          this.status = true;
          if (localStorage.getItem('token')) {
            setTimeout(() => {
              this.router.navigate(['dashboard']);
            }, 3000);
          }
        }
      });
    }
  };

  onlogin = () => this.router.navigate(['parking/signin']);

  onShowHideLastPassword() {
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

  onShowHideNewPassword() {
    if (this.shows.changeDetector._lView[0].className == 'eye') {
      this.shows.changeDetector._lView[0].removeAttribute('class');
      this.shows.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.hides.changeDetector._lView[0].removeAttribute('class');
      this.hides.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.pwdConfirm);
    } else {
      this.hides.changeDetector._lView[0].removeAttribute('class');
      this.hides.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.shows.changeDetector._lView[0].removeAttribute('class');
      this.shows.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.pwdConfirm);
    }
  }
}
