import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartPhoneComponent } from 'src/app/modules/phones/smart-phone/smart-phone.component';
import { TelAccessoiresComponent } from 'src/app/modules/phones/tel-accessoires/tel-accessoires.component';
import { TelFixeComponent } from 'src/app/modules/phones/tel-fixe/tel-fixe.component';

const routes: Routes = [
  {path: 'telFixe', component: TelFixeComponent},
  {path: 'smartPhone', component: SmartPhoneComponent},
  {path: 'telAccessoires', component: TelAccessoiresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
