import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.prod';
import { ISignup } from '../interfaces/ISignup';
import { ISignin } from '../interfaces/ISignin';
import { IUpdatePhoto } from '../interfaces/IUpdatePhoto';
import { IUpdatePasswordUser } from '../interfaces/IUpdatePasswordUser';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private Http: HttpClient) {}

  OnLogin(email: string, password: string): Observable<ISignin> {
    return this.Http.post<ISignin>(`${environment.url}/login/user`, {
      email,
      password,
    });
  }

  OnSignup(body: object): Observable<ISignup> {
    return this.Http.post<ISignup>(`${environment.url}/create/user`, body);
  }

  OnUpdate(body: object): Observable<IUpdatePasswordUser> {
    return this.Http.patch<IUpdatePasswordUser>(
      `${environment.url}/update/user`,
      body
    );
  }

  OnUpdatePhotoUser(formdata: FormData): Observable<IUpdatePhoto> {
    return this.Http.patch<IUpdatePhoto>(
      `${environment.url}/update/photo`,
      formdata
    );
  }
  OnDownloadPhoto(body: object): Observable<any> {
    return this.Http.post(`${environment.url}/download/profile`, body, {
      responseType: 'blob',
    });
  }
}
