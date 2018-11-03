import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },  { path: 'hospital', loadChildren: './hospital/hospital.module#HospitalPageModule' },
  { path: 'go', loadChildren: './go/go.module#GoPageModule' },
  { path: 'situacao', loadChildren: './situacao/situacao.module#SituacaoPageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  { path: 'diagnostico', loadChildren: './diagnostico/diagnostico.module#DiagnosticoPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
