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




 const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'ankiety', component: AnkietyComponent, resolve: { data: UserResolver}},
  { path: 'wiki', component: WikiScrumComponent,  resolve: { data: UserResolver}},
  { path: 'nexus', component: WikiNexusComponent,  resolve: { data: UserResolver}},
  { path: 'notes', component: NotesComponent,  resolve: { data: UserResolver}},
  { path: 'dodaj-notatke', component: DodajNotatkeComponent,  resolve: { data: UserResolver}},
  { path: 'dodaj-notatke/:id', component: DodajNotatkeComponent,  resolve: { data: UserResolver}},
  { path: 'info', component: SprintInfoComponent,  resolve: { data: UserResolver}},
  { path: 'nexus-trzy', component: WikiNexusTrzyComponent,  resolve: { data: UserResolver}}


];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})

export class AppRoutingModule{}