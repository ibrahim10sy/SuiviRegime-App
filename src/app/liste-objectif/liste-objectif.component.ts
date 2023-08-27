import { Component , OnInit } from '@angular/core';
import { ObjectifService } from '../services/objectif.service';
import { Objectif } from '../models/objectif';


@Component({
  selector: 'app-liste-objectif',
  templateUrl: './liste-objectif.component.html',
  styleUrls: ['./liste-objectif.component.css']
})
export class ListeObjectifComponent {

  listeService : Objectif [] = [];

  constructor(private service  : ObjectifService){}

  OnInit(){
    this.listeService = this.service.getObjectifs();
  }

}
