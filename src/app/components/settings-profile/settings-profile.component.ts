import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { methods } from 'src/app/utils/Func';

@Component({
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.scss'],
})
export class SettingsProfileComponent implements OnInit {
  constructor(private service: ServiceService) {}

  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  private formServiceBuilder = inject(FormBuilder);

  @ViewChild('password') password!: any;
  @ViewChild('file') file!: any;
  @ViewChild('btn') button!: any;
  @ViewChild('email') email!: any;
  @ViewChild('profile') image!: any;

  nameButton: string = 'view profile';
  saveButton: string = 'save changes';
  cancelButton: string = 'cancel';
  url: string = '';
  imageSource: any =
    'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=';


  viewBtn: string = 'button1';
  cancelBtn: string = 'button2';
  saveBtn: string = 'button3';

  nickname: string = 'frankie sullivanzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';
  emailStatic: string = 'frankie@untitledui.com';

  protected form = this.formServiceBuilder.group({
    nickame: [''],
    email: [''],
    password: [''],
  });

  ngOnInit(): void {
    if (localStorage.getItem('email')) {
      this.emailStatic = String(localStorage.getItem('email'));
    }
    if (localStorage.getItem('nickname')) {
      this.nickname = String(localStorage.getItem('nickname'));
    }
  }
  onCancelUpdateProfile() {
    this.router.navigate(['dashboard']);
  }
  onUpdateProfile() {
    const EMAIL = this.email.nativeElement.value;
    const PASSWORD = this.password.nativeElement.value;
    const IMAGE = this.file.nativeElement.files[0];

    if (!EMAIL || !PASSWORD || !IMAGE) return;
    else {
      const FORM = new FormData();
      FORM.append('Email', EMAIL);
      FORM.append('Password', PASSWORD);
      FORM.append('Image', IMAGE);
      this.service.OnUpdatePhotoUser(FORM).subscribe((photo) => photo);

      const BODY = {
        Email: EMAIL,
        Password: PASSWORD,
      };

      setTimeout(() => {
        this.service.OnDownloadPhoto(BODY).subscribe((blob) => {
          this.imageSource = methods.ConvertBlobForFile(this.sanitizer, blob);
          console.log(this.imageSource.changingThisBreaksApplicationSecurity);
        });
        this.router.navigate(['dashboard']);
      }, 5000);
    }
  }

  onUpdatePhotoProfile() {}

  onShowHidePassword = (show: any, hide: any) => {
    if (show.changeDetector._lView[0].className == 'eye') {
      show.changeDetector._lView[0].removeAttribute('class');
      show.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      hide.changeDetector._lView[0].removeAttribute('class');
      hide.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.password);
    } else {
      hide.changeDetector._lView[0].removeAttribute('class');
      hide.changeDetector._lView[0].setAttribute('class', 'eyeSlash');
      show.changeDetector._lView[0].removeAttribute('class');
      show.changeDetector._lView[0].setAttribute('class', 'eye');
      methods.showHidePassword(this.password);
    }
  };
}
