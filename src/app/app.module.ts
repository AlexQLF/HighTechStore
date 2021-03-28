import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { StockageModule } from './modules/stockage/stockage.module';
import { OrdinateursModule } from './modules/ordinateurs/ordinateurs.module';
import { PhonesModule } from './modules/phones/phones.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthentificationGuardGuard } from './guards/authentification-guard.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConnexionComponent,
    HelloWorldComponent,
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
  providers: [AuthService,AuthentificationGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
