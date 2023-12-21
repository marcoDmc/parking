import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  heroCogSolid,
  heroPlusSmallSolid,
  heroMinusSmallSolid,
  heroXMarkSolid,
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
import { SettingsProfileComponent } from './components/settings-profile/settings-profile.component';
import { ButtonComponent } from './shared/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { HelpHomePageComponent } from './components/help-home-page/help-home-page.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { InputComponent } from './shared/input/input.component';
import { ButtonUpdatePhotoComponent } from './shared/button-update-photo/button-update-photo.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { NotificationPageComponent } from './components/notification-page/notification-page.component';
import { CardComponent } from './shared/card/card.component';
import { TestimonialCardComponent } from './shared/testimonial-card/testimonial-card.component';

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
    ButtonComponent,
    NotificationComponent,
    HelpComponent,
    SettingsProfileComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    HelpComponent,
    HelpHomePageComponent,
    AccordionComponent,
    InitialPageComponent,
    InputComponent,
    ButtonUpdatePhotoComponent,
    SettingsPageComponent,
    NotificationPageComponent,
    CardComponent,
    TestimonialCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
      heroCogSolid,
      heroPlusSmallSolid,
      heroMinusSmallSolid,
      heroXMarkSolid,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
