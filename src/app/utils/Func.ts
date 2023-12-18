import { DomSanitizer } from '@angular/platform-browser';

export const methods = {
  validateEmail(email: string) {
    if (!email) return false;
    else {
      const pattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const result = pattern.exec(email);
      if (result) return true;
      else return false;
    }
  },
  validatePassword(password: string) {
    if (!password) return false;
    else {
      const pattern =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
      const result = pattern.exec(password);
      if (result) return true;
      else return false;
    }
  },

  showHidePassword(element: any) {
    if (!element) return;
    element.nativeElement.type == 'password'
      ? element.nativeElement.setAttribute('type', 'text')
      : element.nativeElement.setAttribute('type', 'password');
  },
  validatesEmptyFields(
    nickname: string,
    email: string,
    password: string,
    address: string,
    cpf: string,
    fullname: string,
    phone: string
  ) {
    if (
      !nickname ||
      !email ||
      !password ||
      !address ||
      !cpf ||
      !fullname ||
      !phone ||
      !this.validateEmail(email) ||
      !this.validatePassword(password)
    )
      return false;
    else return true;
  },
  ConvertBlobForFile(sanitizer: DomSanitizer, blob: Blob) {
    const unsafeImg = URL.createObjectURL(blob);
    return sanitizer.bypassSecurityTrustResourceUrl(unsafeImg);
  },
  VerifyToken() {
    const TOKEN = localStorage.getItem('token');
    if (TOKEN) return true;
    else return false;
  },
};
