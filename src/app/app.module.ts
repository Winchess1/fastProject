import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { CardsComponent } from './cards/cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {InterceptorService} from './service/interceptor.service';
import { HeaderComponent } from './header/header.component'
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DetailsComponent,
    LoginComponent,
    LocationComponent,
    CardsComponent,
    HeaderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
