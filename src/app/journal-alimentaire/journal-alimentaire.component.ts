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
supprimer(planing : Planification){
  const ID = this.listePlaning.findIndex(index => index.id == planing.id);

  if(ID !== -1){
    this.listePlaning.splice(ID , 1);
   
  } else{
    console.log('Impossible de supprimer')
  }
}
// supprimer(planing : Planification) {
//   const message = "Attention vous allez supprimer";
//   if(planing){
//     if (window.confirm(message)) {
//       this.service.supprimerPlaning(planing);
//   }
//   }else{
//     console.log("Impossible de supprimer");
//   }
  
// }

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
  const repas = this.RepasRecup.find(journal => journal.id === repasId);
  if (repas) {
    repas.consommer = true;
    this.repas.push(repas); // Utilisez la liste repasConsommes au lieu de repas
    console.log('repas consommée est : ', repasId);
    
    localStorage.setItem('savePlanification', JSON.stringify(this.listePlaning));
  } else {
    console.error("Repas introuvable ou propriété 'id' non définie.");
    console.warn('repasId', repasId);
    } 
}



}
