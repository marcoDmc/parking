import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.scss'],
})
export class SettingsProfileComponent {
  name: string = 'view profile';
  save: string = 'save changes';
  cancel: string = 'cancel';

  viewBtn: string = 'button1';
  cancelBtn: string = 'button2';
  saveBtn: string = 'button3';

  onShowHidePassword = (show: any, hide: any) => {
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
  };
}
