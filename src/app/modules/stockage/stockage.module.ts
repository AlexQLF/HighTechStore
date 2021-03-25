import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockageRoutingModule } from './stockage-routing.module';
import { DisqueDurComponent } from 'src/app/disque-dur/disque-dur.component';
import { CleUsbComponent } from 'src/app/cle-usb/cle-usb.component';
import { StockageAccessoiresComponent } from 'src/app/stockage-accessoires/stockage-accessoires.component';


@NgModule({
  declarations: [DisqueDurComponent, CleUsbComponent, StockageAccessoiresComponent],
  imports: [
    CommonModule,
    StockageRoutingModule
  ]
})
export class StockageModule { }
