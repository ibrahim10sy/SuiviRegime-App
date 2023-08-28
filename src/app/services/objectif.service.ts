import { Injectable } from '@angular/core';
import { Objectif } from '../models/objectif';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  private listeObjectif : Objectif [] = [];
  private idCount = 1;

  constructor() { }

  //sauve objectif
  saveObjectif(){
    localStorage.setItem('listeObjectif', JSON.stringify(this.listeObjectif));
  }
   //methode permettant l'ajout d'une nouvelle instances

   ajoutObjectif(objectifs : Objectif){
    objectifs.id = this.idCount;
    this.listeObjectif.push(objectifs);
    this.idCount++;
    this.saveObjectif();
  }

  //Réccuperation des listes des objectifs

  getObjectifs(){
    // return this.listeObjectif;
    let data : any = localStorage.getItem('listeObjectif');
    this.listeObjectif = JSON.parse(data) || [];
    return this.listeObjectif;
  }

  //Methode pour supprimer

  supprimerObjectifs(objectifs : Objectif){
    const ID = this.listeObjectif.findIndex(index => index.id === objectifs.id);

    if(ID !== -1) {
      this.listeObjectif.splice(ID, 1);
      this.saveObjectif();
    }
  }
}