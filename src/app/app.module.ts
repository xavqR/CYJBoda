import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AgmCoreModule } from '@agm/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ConfirmarAsistenciaComponent } from './confirmar/confirmar-asistencia.component';
import { ComollegarComponent } from './comollegar/comollegar.component';
import { MusicaComponent } from './musica/musica.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InformacionComponent,
    ConfirmarAsistenciaComponent,
    ComollegarComponent,
    MusicaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBivQpQdUiasv5j8AT1ptGV2WwJpLwBaxU'
    }),
    MDBBootstrapModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers:
  [
      // {
      //     provide: ErrorHandler,
      //     useClass: GlobalErrorHandler
      // }
  ]

})
export class AppModule { }
