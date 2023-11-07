import { Component, ViewChild, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  @ViewChild('eye') show!: any;
  @ViewChild('eyeSlash') hide!: any;

  @ViewChild('eyes') shows!: any;
  @ViewChild('eyesSlash') hides!: any;

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

  onShowHideLastPassword() {
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

  onShowHideNewPassword() {
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
