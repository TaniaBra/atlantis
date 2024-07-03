import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StoricoOrdiniComponent } from './components/storico-ordini/storico-ordini.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'carrello',
  component: CarrelloComponent
},
{
  path: 'categorie',
  component: CategorieComponent
},
{
  path: 'categorie/:id/prodotti',
  component: ProdottiComponent
},
{
  path: 'categorie/:id/prodotti/:idProdotto',
  component: ProdottoComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'registrati',
  component: RegistrazioneComponent
},
{
  path: 'profilo',
  component: ProfileComponent
},
{
  path: 'storico-ordini',
  component: StoricoOrdiniComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
