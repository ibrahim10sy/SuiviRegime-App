import { Component , OnInit} from '@angular/core';
import { Repas } from '../models/repas';
import { PlanificationService } from '../services/planification.service';
import { Planification } from '../models/planification';
import { RepasService } from '../services/repas.service';

@Component({
  selector: 'app-journal-alimentaire',
  templateUrl: './journal-alimentaire.component.html',
  styleUrls: ['./journal-alimentaire.component.css']
})
export class JournalAlimentaireComponent implements OnInit {
  
  liste : Planification [] = [];
  listeRepas : Repas [] = [];
  consommer : Repas[] = [];
  p : number = 1;
  constructor(
    private planificationService: PlanificationService,
    private repasService: RepasService
  ) { }
  
  
  ngOnInit(): void {
    
    //recuperation des repas
    const repas = localStorage.getItem('savePlat');
    if (repas) {
      this.listeRepas = JSON.parse(repas);
      console.warn(this.listeRepas);
    }
    //receuperation des planifications
    const depotLocal = localStorage.getItem('savePlanification');
    if (depotLocal) {
      this.liste = JSON.parse(depotLocal);
      console.warn(this.liste);
    }

  }

  //marquer les repas comme consommées
  repasConsommee(repasId: number): void {
    const repas = this.listeRepas.find(index => index.id === repasId);
    if (repas) {
      repas.consommer = true;
      this.consommer.push(repas); // Utilisez la liste repasConsommes au lieu de repas
      console.log('repas consommée est : ', repasId);
      
      localStorage.setItem('savePlanification', JSON.stringify(this.liste));
    } else {
      // console.error("Repas introuvable ou propriété 'id' non définie.");
      // console.warn('repasId', repasId);
      console.error("repas introuvable");
      } 

}

supprimer(planing: Planification): void {
  const message = "Attention, vous allez supprimer cette planification.";
  
  if (planing) {
    if (window.confirm(message)) {
      this.planificationService.supprimerPlaning(planing);
      this.liste = this.liste.filter(p => p !== planing); // Mettez à jour la liste locale
      localStorage.setItem('savePlanification', JSON.stringify(this.liste)); // Assurez-vous d'utiliser la bonne clé
    }
  } else {
    console.log("Impossible de supprimer : planing indéfini.");
  }
}

}
