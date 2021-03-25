import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { SmartPhoneComponent } from 'src/app/smart-phone/smart-phone.component';
import { TelAccessoiresComponent } from 'src/app/tel-accessoires/tel-accessoires.component';
import { TelFixeComponent } from 'src/app/tel-fixe/tel-fixe.component';



@NgModule({
  declarations: [TelAccessoiresComponent, TelFixeComponent, SmartPhoneComponent],
  imports: [
    CommonModule,
    PhonesRoutingModule
  ]
})
export class PhonesModule { }
