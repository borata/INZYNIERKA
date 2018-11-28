import { Routes, RouterModule} from '@angular/router';
import { CommonModule} from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AnkietyComponent } from './ankiety/ankiety.component';
import { WikiScrumComponent } from './wiki-scrum/wiki-scrum.component';
import { WikiNexusComponent } from './wiki-nexus/wiki-nexus.component';
import { NotesComponent } from './notes/notes.component';
import { DodajNotatkeComponent } from './dodaj-notatke/dodaj-notatke.component';
import { NgModule } from '@angular/core';
import { SprintInfoComponent } from './sprint-info/sprint-info.component';
import { WikiNexusTrzyComponent } from './wiki-nexus-trzy/wiki-nexus-trzy.component';
import { DashboardGrupa1Component } from './dashboard-grupa1/dashboard-grupa1.component';
import { DashboardGrupa2Component } from './dashboard-grupa2/dashboard-grupa2.component';
import { DashboardGrupa6Component } from './dashboard-grupa6/dashboard-grupa6.component';
import { DashboardGrupa5Component } from './dashboard-grupa5/dashboard-grupa5.component';
import { DashboardGrupa4Component } from './dashboard-grupa4/dashboard-grupa4.component';
import { DashboardGrupa3Component } from './dashboard-grupa3/dashboard-grupa3.component';
import { WybierzGrupeComponent } from './wybierz-grupe/wybierz-grupe.component';
import { InfoGrupa1Component } from './info-grupa1/info-grupa1.component';
import { DodajInfo1Component } from './dodaj-info1/dodaj-info1.component';
import { DodajInfo2Component } from './dodaj-info2/dodaj-info2.component';
import { InfoGrupa2Component } from './info-grupa2/info-grupa2.component';
import { InfoGrupa3Component } from './info-grupa3/info-grupa3.component';
import { DodajInfo3Component } from './dodaj-info3/dodaj-info3.component';
import { InfoGrupa4Component } from './info-grupa4/info-grupa4.component';
import { DodajInfo4Component } from './dodaj-info4/dodaj-info4.component';
import { InfoGrupa5Component } from './info-grupa5/info-grupa5.component';
import { InfoGrupa6Component } from './info-grupa6/info-grupa6.component';
import { DodajInfo6Component } from './dodaj-info6/dodaj-info6.component';
import { DodajInfo5Component } from './dodaj-info5/dodaj-info5.component';




 const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: WybierzGrupeComponent,  resolve: { data: UserResolver}},
  { path: 'ankiety', component: AnkietyComponent, resolve: { data: UserResolver}},
  { path: 'wiki', component: WikiScrumComponent,  resolve: { data: UserResolver}},
  { path: 'nexus', component: WikiNexusComponent,  resolve: { data: UserResolver}},
  { path: 'notes', component: NotesComponent,  resolve: { data: UserResolver}},
  { path: 'dodaj-notatke', component: DodajNotatkeComponent,  resolve: { data: UserResolver}},
  { path: 'dodaj-notatke/:id', component: DodajNotatkeComponent,  resolve: { data: UserResolver}},
  { path: 'info', component: SprintInfoComponent,  resolve: { data: UserResolver}},
  { path: 'nexus-trzy', component: WikiNexusTrzyComponent,  resolve: { data: UserResolver}},
  { path: 'grupa1', component: DashboardGrupa1Component,  resolve: { data: UserResolver}},
  { path: 'grupa2', component: DashboardGrupa2Component,  resolve: { data: UserResolver}},
  { path: 'grupa3', component: DashboardGrupa3Component,  resolve: { data: UserResolver}},
  { path: 'grupa4', component: DashboardGrupa4Component,  resolve: { data: UserResolver}},
  { path: 'grupa5', component: DashboardGrupa5Component,  resolve: { data: UserResolver}},
  { path: 'grupa6', component: DashboardGrupa6Component,  resolve: { data: UserResolver}},
  { path: 'wybierz-grupe', component: WybierzGrupeComponent,  resolve: { data: UserResolver}},
  { path: 'info1', component: InfoGrupa1Component,  resolve: { data: UserResolver}},
  { path: 'info2', component: InfoGrupa2Component,  resolve: { data: UserResolver}},
  { path: 'info3', component: InfoGrupa3Component,  resolve: { data: UserResolver}},
  { path: 'info4', component: InfoGrupa4Component,  resolve: { data: UserResolver}},
  { path: 'info5', component: InfoGrupa5Component,  resolve: { data: UserResolver}},
  { path: 'info6', component: InfoGrupa6Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info1', component: DodajInfo1Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info1/:id', component: DodajInfo1Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info2', component: DodajInfo2Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info2/:id', component: DodajInfo2Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info3', component: DodajInfo3Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info3/:id', component: DodajInfo3Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info4', component: DodajInfo4Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info4/:id', component: DodajInfo4Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info5', component: DodajInfo5Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info5/:id', component: DodajInfo5Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info6', component: DodajInfo6Component,  resolve: { data: UserResolver}},
  { path: 'dodaj-info6/:id', component: DodajInfo6Component,  resolve: { data: UserResolver}}





];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})

export class AppRoutingModule{}