import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcAccessoiresComponent } from 'src/app/modules/ordinateurs/pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from 'src/app/modules/ordinateurs/pc-bureau/pc-bureau.component';
import { PcPortableComponent } from 'src/app/modules/ordinateurs/pc-portable/pc-portable.component';

const routes: Routes = [
  {path: 'PcPortable',component: PcPortableComponent},
  {path: 'PcBureau',component: PcBureauComponent},
  {path: 'PcAccessoires',component: PcAccessoiresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdinateursRoutingModule { }
