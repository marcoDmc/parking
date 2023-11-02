import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';

import {
  heroEyeSlashSolid,
  heroEyeSolid,
  heroUserSolid,
  heroBellSolid,
  heroPlayCircleSolid,
  heroSquare2StackSolid,
  heroBoltSolid,
  heroArrowRightOnRectangleSolid,
  heroCreditCardSolid,
  heroRectangleGroupSolid,
  heroCalendarDaysSolid,
  heroClockSolid,
  heroCheckCircleSolid,
  heroBookmarkSolid,
  heroCog8ToothSolid,
  heroQuestionMarkCircleSolid,
} from '@ng-icons/heroicons/solid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { SearchComponent } from './shared/search/search.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { HelpComponent } from './shared/help/help.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupComponent,
    SidebarComponent,
    SettingsComponent,
    SearchComponent,
    ProfileComponent,
    NotificationComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgIconsModule.withIcons({
      heroEyeSlashSolid,
      heroEyeSolid,
      heroUserSolid,
      heroBellSolid,
      heroPlayCircleSolid,
      heroSquare2StackSolid,
      heroBoltSolid,
      heroArrowRightOnRectangleSolid,
      heroCreditCardSolid,
      heroRectangleGroupSolid,
      heroCalendarDaysSolid,
      heroClockSolid,
      heroCheckCircleSolid,
      heroBookmarkSolid,
      heroCog8ToothSolid,
      heroQuestionMarkCircleSolid,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
