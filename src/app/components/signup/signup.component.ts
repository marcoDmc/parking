import { Component, ViewChild, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @ViewChild('eye') show!: any;
  @ViewChild('eyeSlash') hide!: any;

  @ViewChild('eyes') shows!: any;
  @ViewChild('eyesSlash') hides!: any;

  constructor(private formServiveBuilder: FormBuilder) {}
  protected router = inject(Router);

  name: string = 'create account';
  className: string = 'button1';

  protected form = this.formServiveBuilder.group({
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  onSignup = () => console.log(this.form.value);

  onlogin = () => this.router.navigate(['signin']);

  onShowHideLastPassword() {
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

  onShowHideNewPassword() {
    if (this.shows.changeDetector._lView[0].className == 'eye') {
      this.shows.changeDetector._lView[0].removeAttribute('class');
      this.shows.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.hides.changeDetector._lView[0].removeAttribute('class');
      this.hides.changeDetector._lView[0].setAttribute('class', 'eye');
    } else {
      this.hides.changeDetector._lView[0].removeAttribute('class');
      this.hides.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      this.shows.changeDetector._lView[0].removeAttribute('class');
      this.shows.changeDetector._lView[0].setAttribute('class', 'eye');
    }
  }
}
