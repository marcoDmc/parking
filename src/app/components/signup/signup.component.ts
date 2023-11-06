import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
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

  onSignup(): void {
    console.log(this.form.value);
  }

  onlogin(): void {
    this.router.navigate(['signin']);
  }

  onShowHideLastPassword(show: any, hide: any) {
    if (show.changeDetector._lView[0].className == 'eye') {
      show.changeDetector._lView[0].removeAttribute('class');
      show.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      hide.changeDetector._lView[0].removeAttribute('class');
      hide.changeDetector._lView[0].setAttribute('class', 'eye');
    } else {
      hide.changeDetector._lView[0].removeAttribute('class');
      hide.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      show.changeDetector._lView[0].removeAttribute('class');
      show.changeDetector._lView[0].setAttribute('class', 'eye');
    }
  }

  onShowHideNewPassword(show: any, hide: any) {
    if (show.changeDetector._lView[0].className == 'eye') {
      show.changeDetector._lView[0].removeAttribute('class');
      show.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      hide.changeDetector._lView[0].removeAttribute('class');
      hide.changeDetector._lView[0].setAttribute('class', 'eye');
    } else {
      hide.changeDetector._lView[0].removeAttribute('class');
      hide.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      show.changeDetector._lView[0].removeAttribute('class');
      show.changeDetector._lView[0].setAttribute('class', 'eye');
    }
  }
}
