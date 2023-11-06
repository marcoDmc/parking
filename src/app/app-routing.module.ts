import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsProfileComponent } from './components/settings-profile/settings-profile.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'signin',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
  },
  {
    path: 'app',
    component: DashboardComponent,
  },
  {
    path: 'settings/profile',
    component: SettingsProfileComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
