import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
