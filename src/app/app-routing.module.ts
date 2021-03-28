import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AuthentificationGuardGuard } from './guards/authentification-guard.guard';


const routes: Routes = [
  {path: '',component: HomeComponent, canActivate:[AuthentificationGuardGuard]},
  {path: 'Ordinateurs', loadChildren: './modules/ordinateurs/ordinateurs.module#OrdinateursModule', canActivate:[AuthentificationGuardGuard]},
  {path: 'Phones', loadChildren: './modules/phones/phones.module#PhonesModule', canActivate:[AuthentificationGuardGuard]},
  {path: 'Stockage', loadChildren: './modules/stockage/stockage.module#StockageModule', canActivate:[AuthentificationGuardGuard]},
  {path: 'Connexion',component: ConnexionComponent},
  {path: 'HelloWorld',component: HelloWorldComponent, canActivate:[AuthentificationGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
