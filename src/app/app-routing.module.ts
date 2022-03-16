import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},  //Ruta default en caso que no se especifique
    { path: 'home', component: HomeComponent},
    { path: 'cliente', component: ClienteComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
