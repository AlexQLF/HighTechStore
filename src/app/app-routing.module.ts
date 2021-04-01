import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthentificationGuardGuard } from './guards/authentification-guard.guard';
import { ArticleComponent } from './modules/article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { NoauthentificationGuardGuard } from './guards/noauthentification-guard.guard';

const routes: Routes = [
  {path: 'Home',component: HomeComponent},
  {path: 'Ordinateurs', loadChildren: './modules/ordinateurs/ordinateurs.module#OrdinateursModule'},
  {path: 'Phones', loadChildren: './modules/phones/phones.module#PhonesModule'},
  {path: 'Stockage', loadChildren: './modules/stockage/stockage.module#StockageModule'},
  {path: 'Connexion',component: ConnexionComponent, canActivate:[NoauthentificationGuardGuard]},
  {path: 'CreateArticle', component: CreateArticleComponent,  canActivate:[AuthentificationGuardGuard]},
  {path: 'articles/:id',component: ArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
