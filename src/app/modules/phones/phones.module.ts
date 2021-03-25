import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { SmartPhoneComponent } from 'src/app/modules/phones/smart-phone/smart-phone.component';
import { TelAccessoiresComponent } from 'src/app/modules/phones/tel-accessoires/tel-accessoires.component';
import { TelFixeComponent } from 'src/app/modules/phones/tel-fixe/tel-fixe.component';



@NgModule({
  declarations: [TelAccessoiresComponent, TelFixeComponent, SmartPhoneComponent],
  imports: [
    CommonModule,
    PhonesRoutingModule
  ]
})
export class PhonesModule { }
