import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleUsbComponent } from 'src/app/cle-usb/cle-usb.component';
import { DisqueDurComponent } from 'src/app/disque-dur/disque-dur.component';
import { StockageAccessoiresComponent } from 'src/app/stockage-accessoires/stockage-accessoires.component';

const routes: Routes = [
  {path: 'disque-dur', component: DisqueDurComponent},
  {path: 'cle-usb', component: CleUsbComponent},
  {path: 'stockage-accessoires', component: StockageAccessoiresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockageRoutingModule { }
