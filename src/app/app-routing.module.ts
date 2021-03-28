import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AuthentificationGuardGuard } from './guards/authentification-guard.guard';
import { ArticleComponent } from './modules/article/article.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'Ordinateurs', loadChildren: './modules/ordinateurs/ordinateurs.module#OrdinateursModule'},
  {path: 'Phones', loadChildren: './modules/phones/phones.module#PhonesModule'},
  {path: 'Stockage', loadChildren: './modules/stockage/stockage.module#StockageModule'},
  {path: 'Connexion',component: ConnexionComponent},
  {path: 'articles/:id',component: ArticleComponent},
  {path: 'HelloWorld',component: HelloWorldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
