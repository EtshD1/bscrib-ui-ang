import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SighupComponent } from './sighup/sighup.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { PublicationComponent } from './publication/publication.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SighupComponent,
    HomepageComponent,
    PublicationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
