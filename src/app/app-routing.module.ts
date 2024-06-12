import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PratosComponent } from './pratos/pratos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { SobremesasComponent } from './sobremesas/sobremesas.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ComandaComponent } from './comanda/comanda.component';
import { AuthGuard } from './auth-guard.service';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'pratos', component: PratosComponent },
  { path: 'bebidas', component: BebidasComponent },
  { path: 'sobremesas', component: SobremesasComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'cozinha', component: CozinhaComponent },
  { path: 'comanda', component: ComandaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
