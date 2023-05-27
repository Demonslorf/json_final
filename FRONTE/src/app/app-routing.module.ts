import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueoComponent } from './Component/logueo/logueo.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { CreateAnteproyectComponent } from './Component/create-anteproyect/create-anteproyect.component';
import { CreateItemComponent } from './Component/create-item/create-item.component';
import { ShowAnteproyectComponent } from './Component/show-anteproyect/show-anteproyect.component';
import { ShowCorrectionComponent } from './Component/show-correction/show-correction.component';
import { DescrpcionComponent } from './Component/Items/descrpcion/descrpcion.component';
import { HipotesisComponent } from './Component/Items/hipotesis/hipotesis.component';
import { JustificacionComponent } from './Component/Items/justificacion/justificacion.component';
import { ObjetivoGeneralComponent } from './Component/Items/objetivo-general/objetivo-general.component';
import { TituloTentativoComponent } from './Component/Items/titulo-tentativo/titulo-tentativo.component';
import { PlanteamientoComponent } from './Component/Items/planteamiento/planteamiento.component';
import { BienvenidoComponent } from './Component/bienvenido/bienvenido.component';
import { AuthGuard } from './Services/Authentication/auth.guard';
import { AdmonComponent } from './Component/admon/admon.component';
import { EditComponent } from './Component/show-anteproyect/edit/edit.component';

const routes: Routes = [
  {path:'', redirectTo: 'Login', pathMatch: 'full'},
  {path:'Login', component: LogueoComponent},
  {path:'Admon', component: AdmonComponent},
  {path:'AnteProyecto/Edit/:id', component: EditComponent},
  {path:'Start/:id', component: BienvenidoComponent},
  {path:'AnteProyecto/:id', component: ShowAnteproyectComponent, canActivate:[AuthGuard]},
  {path:'Correcciones/:id', component: ShowCorrectionComponent, canActivate:[AuthGuard]},
  {path:'RegistroAnteProyecto/:userId', component: CreateAnteproyectComponent, canActivate:[AuthGuard]},
  
  {path:'RegistroItem/:id', component: DescrpcionComponent, canActivate:[AuthGuard]},
  {path:'Hipotesis/:id/:item1/:item2', component: HipotesisComponent, canActivate:[AuthGuard]},
  {path:'Justificacion/:id/:item1/:item2/:item3/:item4/:item5', component: JustificacionComponent, canActivate:[AuthGuard]},
  {path:'ObjetivoGeneral/:id/:item1/:item2/:item3', component: ObjetivoGeneralComponent, canActivate:[AuthGuard]},
  {path:'TituloTentativo/:id/:item1/:item2/:item3/:item4', component: TituloTentativoComponent, canActivate:[AuthGuard]},
  {path:'PlaneamientoProblema/:id/:item1', component: PlanteamientoComponent, canActivate:[AuthGuard]},
  {path:'**', redirectTo: 'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
