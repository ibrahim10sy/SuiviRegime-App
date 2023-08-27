import { Injectable } from '@angular/core';
import { Repas } from '../models/repas';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  constructor() { }

  private repasListe : Repas [] = [];
  private idCount = 1;
  
  //ajout de repas
  ajoutRepas(repas : Repas) {
    repas.id = this.idCount;
    this.repasListe.push(repas);
    this.idCount++;
  }
  //liste des repas

  getRepas() {
    return this.repasListe;
  }
  
  supprimerRepas(repas : Repas){
    const ID = this.repasListe.findIndex(index => index.id === repas.id);
    
    if(ID !== -1 ){
      this.repasListe.splice(ID, 1);
    }
  }
  
}
