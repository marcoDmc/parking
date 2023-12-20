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

  className: string = 'button7';
  name: string = 'create account';
  status: boolean | undefined;

  @ViewChild('eye') show!: any;
  @ViewChild('eyeSlash') hide!: any;
  @ViewChild('eyes') shows!: any;
  @ViewChild('eyesSlash') hides!: any;
  @ViewChild('password') pwd!: any;
  @ViewChild('passwordConfirm') pwdConfirm!: any;

  ngOnInit(): void {}

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
    if (this.show.elementRef.nativeElement.className == 'eye') {
      this.show.elementRef.nativeElement.removeAttribute('class');
      this.show.elementRef.nativeElement.setAttribute('class', 'eyeSlash');
      this.hide.elementRef.nativeElement.removeAttribute('class');
      this.hide.elementRef.nativeElement.setAttribute('class', 'eye');
      methods.showHidePassword(this.pwd);
    } else {
      this.hide.elementRef.nativeElement.removeAttribute('class');
      this.hide.elementRef.nativeElement.setAttribute('class', 'eyeSlash');
      this.show.elementRef.nativeElement.removeAttribute('class');
      this.show.elementRef.nativeElement.setAttribute('class', 'eye');
      methods.showHidePassword(this.pwd);
    }
  }

  onShowHideNewPassword() {
    if (this.shows.elementRef.nativeElement.className == 'eye') {
      this.shows.elementRef.nativeElement.removeAttribute('class');
      this.shows.elementRef.nativeElement.setAttribute('class', 'eyeSlash');
      this.hides.elementRef.nativeElement.removeAttribute('class');
      this.hides.elementRef.nativeElement.setAttribute('class', 'eye');
      methods.showHidePassword(this.pwdConfirm);
    } else {
      this.hides.elementRef.nativeElement.removeAttribute('class');
      this.hides.elementRef.nativeElement.setAttribute('class', 'eyeSlash');
      this.shows.elementRef.nativeElement.removeAttribute('class');
      this.shows.elementRef.nativeElement.setAttribute('class', 'eye');
      methods.showHidePassword(this.pwdConfirm);
    }
  }
}
