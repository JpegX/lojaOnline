import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbarSuperior/navbar.component';
import { CarroselImgComponent } from './template/carrossel-img/carrossel-img.component';
import { CorpoComponent } from './template/corpo/corpo.component';
import { NavbarInferiorComponent } from './template/navbarInferior/navbar-inferior.component';
// import {} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarroselImgComponent,
    CorpoComponent,
    NavbarInferiorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
