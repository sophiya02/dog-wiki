import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialExampleModule } from './material/material.module';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { DashboardHeadComponent } from './dashboard-head/dashboard-head.component';
import { AutocompleteService } from 'src/lib/services/autocomplete.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from 'src/lib/services/service.module';
import { Top10Component } from './top10/top10.component';
import { BreedsComponent } from './breeds/breeds.component';
import { RatingBoxesComponent } from './rating-boxes/rating-boxes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpandDirective } from './expand.directive';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardBodyComponent,
    DashboardHeadComponent,
    Top10Component,
    BreedsComponent,
    RatingBoxesComponent,
    ExpandDirective,
    ImageDialogComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicesModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
