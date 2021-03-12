import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { CarroselImgComponent } from './template/carrossel-img/carrossel-img.component';
import { CorpoComponent } from './template/corpo/corpo.component';
// import {} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarroselImgComponent,
    CorpoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
