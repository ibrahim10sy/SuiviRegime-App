import { Injectable } from '@angular/core';
import { Repas } from '../models/repas';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  constructor() { }

  private repasListe : Repas [] = [];
  private idCount = 1;

  //stockage local
  saveRepas(){
    localStorage.setItem('repasListe', JSON.stringify(this.repasListe));
    }

  //ajout de repas
  ajoutRepas(repas : Repas) {
    repas.id = this.idCount; 
    this.repasListe.push(repas);
    this.idCount++;
    this.saveRepas();//sauve apres ajout de nouveau repas
  }
  //liste des repas

  getRepas() {
    // return this.repasListe;
   let data : any = localStorage.getItem('repasListe');
   this.repasListe = JSON.parse(data) || [];
   return this.repasListe;
  }
  
   //suppression
   supprimerRepas(repas: Repas) {
    const index = this.repasListe.findIndex(item => item.id === repas.id);
    if (index !== -1) {
      this.repasListe.splice(index, 1);
      this.saveRepas();
    }
  }
  
  
  //modifications 
  modifierRepas(repas: Repas) {
    const ID = this.repasListe.findIndex(index => index.id === repas.id);
  
    if (ID !== -1) {
      this.repasListe[ID] = repas; 
      this.saveRepas(); 
    }
  }
  

  isRepasExiste(repasId: number): boolean {
    return this.repasListe.some(r => r.id === repasId);
  }
  
}
