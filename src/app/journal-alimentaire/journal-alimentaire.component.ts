import { Component } from '@angular/core';
import { Repas } from '../models/repas';
import { PlanificationService } from '../services/planification.service';
import { Planification } from '../models/planification';
import { RepasService } from '../services/repas.service';

@Component({
  selector: 'app-journal-alimentaire',
  templateUrl: './journal-alimentaire.component.html',
  styleUrls: ['./journal-alimentaire.component.css']
})
export class JournalAlimentaireComponent {
  // planing : Planification [] = [
  //   {
  //     id: 1,
  //     nom: "Repas du jour",
  //     description: "Mes repas du jour pour ne pas perdre du poids",
  //     repas: [
  //       new Repas(1, "Salade", "Salade verte fraîche", 100, "salade.jpg", true),
  //       new Repas(2, "Oeuf sur plat", "Oeuf cuit à la poêle", 150, "oeuf.jpg", true),
  //       new Repas(3, "Viande boeuf", "Viande de boeuf grillée", 200, "viande.jpg", true)
  //     ],
  //     jour: '2023-08-27' 
  //   },
  //   {
  //     id: 2,
  //     nom: "Repas du jour",
  //     description: "Mes repas du jour pour ne pas perdre du poids",
  //     repas: [
  //       new Repas(1, "Salade", "Salade verte fraîche", 100, "salade.jpg", true),
  //       new Repas(2, "Oeuf sur plat", "Oeuf cuit à la poêle", 150, "oeuf.jpg", true),
  //       new Repas(3, "Viande boeuf", "Viande de boeuf grillée", 200, "viande.jpg", true)
  //     ],
  //     jour: '2023-08-28' 
  //   },
    
  // ]

  constructor(private service : PlanificationService, private repasService : RepasService){}
 
  listePlaning : Planification [] = [];
   repas !:Repas;
   p : number = 1;

  // planingData: Planifications[] = planing;
  
  ngOnInit() {
    this.listePlaning = this.service.getPlaning();
    const storageLocal = localStorage.getItem('savePlanification');
    if(storageLocal){
      this.listePlaning = JSON.parse(storageLocal);
    }

}
  supprimer(objet : Planification){
    this.service.supprimerPlaning(objet);
  }

//methode permettant de marquer un repas comme consommée
  marquerRepas(repas : Repas){
    this.repasService.repasConsommee(repas.id);
    console.warn(repas); 
  }
}
