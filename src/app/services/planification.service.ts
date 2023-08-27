import { Injectable } from '@angular/core';
import { Planification } from '../models/planification';
import { Repas } from '../models/repas';
import { RepasService } from './repas.service';

@Injectable({
  providedIn: 'root'
})
export class PlanificationService {

  private listePlaning = [] = [];
  private idCount = 1;

  //ajout du planing

  // ajoutPlaning(planing : Planification){
  //   planing.id = this.idCount;
  //   this.listePlaning.push(planing);
  //   this.idCount++;
  // }
  // AjoutPlaning(planing : Planification){
  //   planing.id = this.idCount;
  //   this.listePlaning.push(planing);
  //   this.idCount++;
  // }
  
}
