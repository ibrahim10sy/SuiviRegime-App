import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRepasComponent } from './add-repas/add-repas.component';
import { JournalAlimentaireComponent } from './journal-alimentaire/journal-alimentaire.component';
import { PlanificationRepasComponent } from './planification-repas/planification-repas.component';
import { SuiviObjectifsComponent } from './suivi-objectifs/suivi-objectifs.component';
import { RepasComponent } from './repas/repas.component';
import { ListeObjectifComponent } from './liste-objectif/liste-objectif.component';

const routes: Routes = [
  { path: '', redirectTo: 'repaspage', pathMatch: 'full' },   
  { path: 'repaspage', component: RepasComponent },
  { path: 'addRepas', component: AddRepasComponent },
  { path: 'journal', component: JournalAlimentaireComponent },
  { path: 'planification', component: PlanificationRepasComponent },
  { path: 'suivi', component: SuiviObjectifsComponent },
  { path: 'liste', component: ListeObjectifComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
