import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { heroEyeSolid, heroEyeSlashSolid } from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgIconsModule.withIcons({
      heroEyeSolid,
      heroEyeSlashSolid,
    }),
  ],
})
export class SharedModule {}
