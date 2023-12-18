import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsProfileComponent } from './components/settings-profile/settings-profile.component';
import { AboutComponent } from './components/about/about.component';
import { HelpHomePageComponent } from './components/help-home-page/help-home-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { guardGuard } from './Guard/guard.guard';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { NotificationPageComponent } from './components/notification-page/notification-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InitialPageComponent,
  },

  {
    path: 'parking',
    component: InitialPageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'help',
        component: HelpHomePageComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
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
    ],
  },
  {
    path: 'dashboard',
    canActivate: [guardGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        component: SettingsProfileComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'help',
        component: HelpHomePageComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'notification',
        component: NotificationPageComponent,
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
