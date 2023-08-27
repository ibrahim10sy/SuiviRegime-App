import { Component } from '@angular/core';
import { PlanificationService } from '../services/planification.service';
import { Planification } from '../models/planification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repas } from '../models/repas';
import { RepasService } from '../services/repas.service';

@Component({
  selector: 'app-planification-repas',
  templateUrl: './planification-repas.component.html',
  styleUrls: ['./planification-repas.component.css']
})
export class PlanificationRepasComponent {

  newPlaning  = new Planification(1,'','',[],'');
  repasSelect : Repas [] | any;
  planingForm ! : FormGroup;

  constructor(private formBuilder: FormBuilder, private planingService : PlanificationService,  private repService : RepasService){}

  ngOnInit(){
    //recuperation des repas dans le composant planification

    this.repasSelect = this.repService.getRepas();
    
    this.planingForm = this.formBuilder.group({
      id : [null],
      nom : ['', Validators.required],
      description : ['', Validators.required],
      repas : ['', Validators.required],
      jour : ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.planingForm.valid){
      this.newPlaning = this.planingForm.value;
      this.planingService.ajoutPlaning(this.newPlaning);
      this.planingForm.reset();
    }
  }

  deletePlaning(planing : Planification){ 
    this.planingService.supprimerPlaning(planing);
  }
}
