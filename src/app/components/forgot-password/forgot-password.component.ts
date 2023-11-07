import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  constructor(private formServiceBuilder: FormBuilder) {}

  protected router = inject(Router);

  name: string = 'update';
  className: string = 'button4';

  protected form = this.formServiceBuilder.group({
    lastPassword: [''],
    newPassword: [''],
  });

  onUpdatePassword = () => console.log(this.form.value);

  onRedirectLogin = () => this.router.navigate(['signin']);

  
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
