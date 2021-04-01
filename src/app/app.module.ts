import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { StockageModule } from './modules/stockage/stockage.module';
import { OrdinateursModule } from './modules/ordinateurs/ordinateurs.module';
import { PhonesModule } from './modules/phones/phones.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './modules/article/article.component';
import { AuthService } from './services/auth.service';
import { AuthentificationGuardGuard } from './guards/authentification-guard.guard';
import { FooterComponent } from './footer/footer.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { NoauthentificationGuardGuard } from './guards/noauthentification-guard.guard';
import { UpdateArticleComponent } from './update-article/update-article.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConnexionComponent,
    FooterComponent,
    ArticleComponent,
    CreateArticleComponent,
    UpdateArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StockageModule,
    OrdinateursModule,
    PhonesModule,
    HttpClientModule,
    
  ],
  providers: [AuthService,AuthentificationGuardGuard, NoauthentificationGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
