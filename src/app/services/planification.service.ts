import { Injectable } from '@angular/core';
import { Planification } from '../models/planification';
import { Repas } from '../models/repas';
import { RepasService } from './repas.service';

@Injectable({
  providedIn: 'root'
})
export class PlanificationService {

  private listePlaning : Planification []= [];
  private idCount = 1;

  constructor(){}

  //methode permettant l'ajout
  ajoutPlaning(planing : Planification){
    planing.id = this.idCount;
    this.listePlaning.push(planing);
    this.idCount++;
  }
  
  //Réccuperation des listes 
  getPlaning(){
    return this.listePlaning;
  }

  //suppression
  supprimerPlaning(planing : Planification){
    const ID = this.listePlaning.findIndex(index => index.id == planing.id);

    if(ID !== -1){
      this.listePlaning.splice(ID , 1);
    }
  }

}
