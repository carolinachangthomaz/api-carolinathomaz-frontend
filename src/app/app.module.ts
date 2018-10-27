import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RastreadorComponent } from './components/rastreador/rastreador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RastreadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
