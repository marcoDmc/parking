import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HelpComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
