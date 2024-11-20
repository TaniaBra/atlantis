import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { CategorieComponent } from './components/categorie/categorie.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { CardProdottoComponent } from './components/card-prodotto/card-prodotto.component';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoricoOrdiniComponent } from './components/storico-ordini/storico-ordini.component';
import { AddressDialogComponent } from './components/profile/address-dialog/address-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarrelloComponent,
    CategorieComponent,
    LoginComponent,
    RegistrazioneComponent,
    ProdottoComponent,
    ProdottiComponent,
    CardProdottoComponent,
    ProfileComponent,
    FooterComponent,
    StoricoOrdiniComponent,
    AddressDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


