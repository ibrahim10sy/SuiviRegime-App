import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import Swal from 'sweetalert2'

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
import { ImageViewComponent } from './image-view/image-view.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalAlimentaireComponent,
    PlanificationRepasComponent,
    SuiviObjectifsComponent,
    AddRepasComponent,
    ListeObjectifComponent,
    RepasComponent,
    ImageViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
   
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
