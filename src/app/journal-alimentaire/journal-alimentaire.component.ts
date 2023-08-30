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


  constructor(private service : PlanificationService, private repasService : RepasService){}
 
  listePlaning : Planification [] = [];
   repas :Repas [] = [];
   RepasRecup : Repas [] = [];
   p : number = 1;

  // planingData: Planifications[] = planing;
  
  ngOnInit() {
    this.RepasRecup = this.repasService.getRepas();
    this.listePlaning = this.service.getPlaning();
    const storageLocal = localStorage.getItem('savePlanification');
    if(storageLocal){
      this.listePlaning = JSON.parse(storageLocal);
    }

}
  supprimer(objet : Planification){
    this.service.supprimerPlaning(objet);
  }

//   marquerRepas(repas: Repas): void {
//     if (repas && repas.id) {
//         this.repasService.repasConsommee(repas.id);
//     } else {
//         console.error("L'objet repas ou sa propriété 'id' est indéfini.");
//     }
// }
// repasConsommee(repasId:number):void{
//   const repas = this.repas.find(index => index.id === repasId);
//   if(repas){
//     repas.consommer = true;
//     this.repas.push(repas);
   
//   }

repasConsommee(repasId: number): void {
  const repas = this.repas.find(journal => journal.id === repasId);
  if (repas) {
    repas.consommer = true;
    this.RepasRecup.push(repas); // Utilisez la liste repasConsommes au lieu de repas
    console.warn(repas);
    
    localStorage.setItem('savePlanification', JSON.stringify(this.listePlaning));
  } else {
    console.error("Repas introuvable ou propriété 'id' non définie.");
  }
}



}
