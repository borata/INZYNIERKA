import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AnkietyComponent } from './ankiety/ankiety.component';
import { WikiScrumComponent } from './wiki-scrum/wiki-scrum.component';
import { WikiNexusComponent } from './wiki-nexus/wiki-nexus.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { DodajNotatkeComponent } from './dodaj-notatke/dodaj-notatke.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SprintInfoComponent } from './sprint-info/sprint-info.component';
import { WikiNexusTrzyComponent } from './wiki-nexus-trzy/wiki-nexus-trzy.component';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    AnkietyComponent,
    WikiScrumComponent,
    WikiNexusComponent,
    NotesComponent,
    DodajNotatkeComponent,
    SprintInfoComponent,
    WikiNexusTrzyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule, // imports firebase/auth, only needed for auth features
    BrowserTransferStateModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [AuthService,  UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }