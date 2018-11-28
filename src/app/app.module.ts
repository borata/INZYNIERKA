import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
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
import { AngularFireAuth } from '@angular/fire/auth';


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
import { DashboardGrupa1Component } from './dashboard-grupa1/dashboard-grupa1.component';
import { DashboardGrupa2Component } from './dashboard-grupa2/dashboard-grupa2.component';
import { DashboardGrupa3Component } from './dashboard-grupa3/dashboard-grupa3.component';
import { DashboardGrupa4Component } from './dashboard-grupa4/dashboard-grupa4.component';
import { DashboardGrupa5Component } from './dashboard-grupa5/dashboard-grupa5.component';
import { DashboardGrupa6Component } from './dashboard-grupa6/dashboard-grupa6.component';
import { WybierzGrupeComponent } from './wybierz-grupe/wybierz-grupe.component';
import { InfoGrupa1Component } from './info-grupa1/info-grupa1.component';
import { DodajInfo1Component } from './dodaj-info1/dodaj-info1.component';
import { InfoGrupa2Component } from './info-grupa2/info-grupa2.component';
import { DodajInfo2Component } from './dodaj-info2/dodaj-info2.component';
import { InfoGrupa3Component } from './info-grupa3/info-grupa3.component';
import { DodajInfo3Component } from './dodaj-info3/dodaj-info3.component';
import { InfoGrupa4Component } from './info-grupa4/info-grupa4.component';
import { DodajInfo4Component } from './dodaj-info4/dodaj-info4.component';
import { InfoGrupa5Component } from './info-grupa5/info-grupa5.component';
import { DodajInfo5Component } from './dodaj-info5/dodaj-info5.component';
import { InfoGrupa6Component } from './info-grupa6/info-grupa6.component';
import { DodajInfo6Component } from './dodaj-info6/dodaj-info6.component';






export const firebaseConfig = {
  //fill this data with the data you get from the firebase console
  apiKey: "AIzaSyDwmTe_FYZpnfQcNBx1hfSSSXjmPYGpoAQ",
    authDomain: "pracainzynierskascrum.firebaseapp.com",
    databaseURL: "https://pracainzynierskascrum.firebaseio.com",
    projectId: "pracainzynierskascrum",
    storageBucket: "pracainzynierskascrum.appspot.com",
    messagingSenderId: "51807470598"
}

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
    WikiNexusTrzyComponent,
    DashboardGrupa1Component,
    DashboardGrupa2Component,
    DashboardGrupa3Component,
    DashboardGrupa4Component,
    DashboardGrupa5Component,
    DashboardGrupa6Component,
    WybierzGrupeComponent,
    InfoGrupa1Component,
    DodajInfo1Component,
    InfoGrupa2Component,
    DodajInfo2Component,
    InfoGrupa3Component,
    DodajInfo3Component,
    InfoGrupa4Component,
    DodajInfo4Component,
    InfoGrupa5Component,
    DodajInfo5Component,
    InfoGrupa6Component,
    DodajInfo6Component
   
    
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
    BrowserAnimationsModule
   
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }