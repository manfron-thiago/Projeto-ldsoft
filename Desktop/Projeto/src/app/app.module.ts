import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { ClienteComponent } from './cliente/cliente.component';
import { TemplateComponent } from './template/template.component';
import { UpdateComponent } from './update/update.component';
import { CarroComponent } from './carro/carro.component';

import { AngularFireAuth  } from '@angular/fire/auth';

import { AuthGuard } from "./guards/auth.guard";

import { LoginService } from "./login/login.service"

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ClienteComponent,
    UpdateComponent,
    LoginComponent,
    CarroComponent,
    TemplateComponent

  ],
  providers: [AuthGuard, LoginService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
