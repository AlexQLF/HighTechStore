import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdinateursRoutingModule } from './ordinateurs-routing.module';
import { PcBureauComponent } from 'src/app/pc-bureau/pc-bureau.component';
import { PcPortableComponent } from 'src/app/pc-portable/pc-portable.component';
import { PcAccessoiresComponent } from 'src/app/pc-accessoires/pc-accessoires.component';


@NgModule({
  declarations: [PcBureauComponent,PcPortableComponent,PcAccessoiresComponent],
  imports: [
    CommonModule,
    OrdinateursRoutingModule
  ]
})
export class OrdinateursModule { }
