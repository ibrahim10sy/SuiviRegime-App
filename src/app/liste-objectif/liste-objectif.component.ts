import { Component , OnInit } from '@angular/core';
import { ObjectifService } from '../services/objectif.service';
import { Objectif } from '../models/objectif';


@Component({
  selector: 'app-liste-objectif',
  templateUrl: './liste-objectif.component.html',
  styleUrls: ['./liste-objectif.component.css']
})
export class ListeObjectifComponent implements OnInit {

  listeService : Objectif [] = [];

  constructor(private service  : ObjectifService){}

  ngOnInit(){
    this.listeService= this.service.getObjectifs();
    const storageLocal= localStorage.getItem('saveObjectif');
    if(storageLocal){
      this.listeService=JSON.parse(storageLocal);
    }
  }

  supprimer(objet : Objectif){
    this.service.supprimerObjectifs(objet);
  }

}