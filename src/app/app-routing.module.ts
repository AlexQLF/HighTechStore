import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AuthentificationGuardGuard } from './guards/authentification-guard.guard';
import { ArticleComponent } from './modules/article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const routes: Routes = [
  {path: 'Home',component: HomeComponent, canActivate:[AuthentificationGuardGuard]},
  {path: 'Ordinateurs', loadChildren: './modules/ordinateurs/ordinateurs.module#OrdinateursModule', canActivate:[AuthentificationGuardGuard]},
  {path: 'Phones', loadChildren: './modules/phones/phones.module#PhonesModule', canActivate:[AuthentificationGuardGuard]},
  {path: 'Stockage', loadChildren: './modules/stockage/stockage.module#StockageModule', canActivate:[AuthentificationGuardGuard]},
  {path: 'Connexion',component: ConnexionComponent},
  {path: 'CreateArticle', component: CreateArticleComponent},
  {path: 'UpdateArticle/:id', component: UpdateArticleComponent},
  {path: 'articles/:id',component: ArticleComponent},
  {path: 'HelloWorld',component: HelloWorldComponent},
  {path: 'HelloWorld',component: HelloWorldComponent, canActivate:[AuthentificationGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
