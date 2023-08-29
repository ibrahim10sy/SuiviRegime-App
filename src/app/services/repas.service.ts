import { Injectable } from '@angular/core';
import { Repas } from '../models/repas';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  constructor() { }

  private repasListe : Repas [] = [];
  private repasConsommer : Repas [] = [];
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
    const ID = this.repasListe.findIndex(index => index.id === repas.id);
    if (ID !== -1) {
      this.repasListe.splice(ID, 1);
      this.saveRepas();
    }
  }
  
  //methode permettant de marquer le repas comme consommée

  repasConsommee(repasId:number):void{
    const repas = this.repasListe.find(index => index.id === repasId);
    if(repas){
      repas.consommer = true;
      this.repasConsommer.push(repas);
      this.saveRepas();
    }

  }

  isRepasExiste(repasId: number): boolean {
    return this.repasListe.some(r => r.id === repasId);
  }
  
}
