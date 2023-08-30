import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalAlimentaireComponent } from './journal-alimentaire/journal-alimentaire.component';
import { PlanificationRepasComponent } from './planification-repas/planification-repas.component';
import { SuiviObjectifsComponent } from './suivi-objectifs/suivi-objectifs.component';
import { AddRepasComponent } from './add-repas/add-repas.component';
import { ListeObjectifComponent } from './liste-objectif/liste-objectif.component';
import { RepasComponent } from './repas/repas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    JournalAlimentaireComponent,
    PlanificationRepasComponent,
    SuiviObjectifsComponent,
    AddRepasComponent,
    ListeObjectifComponent,
    RepasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
