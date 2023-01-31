import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ApiComponent } from './api/api.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApiComponent,
    AdminDashComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
