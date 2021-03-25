import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockageRoutingModule } from './stockage-routing.module';
import { DisqueDurComponent } from 'src/app/modules/stockage/disque-dur/disque-dur.component';
import { CleUsbComponent } from 'src/app/modules/stockage/cle-usb/cle-usb.component';
import { StockageAccessoiresComponent } from 'src/app/modules/stockage/stockage-accessoires/stockage-accessoires.component';


@NgModule({
  declarations: [DisqueDurComponent, CleUsbComponent, StockageAccessoiresComponent],
  imports: [
    CommonModule,
    StockageRoutingModule
  ]
})
export class StockageModule { }
