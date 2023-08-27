import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Objectif } from '../models/objectif';
import { ObjectifService } from '../services/objectif.service';

@Component({
  selector: 'app-suivi-objectifs',
  templateUrl: './suivi-objectifs.component.html',
  styleUrls: ['./suivi-objectifs.component.css']
})
export class SuiviObjectifsComponent {

  newObjectifs = new Objectif(1,'','',0);

  objectifForm ! : FormGroup;

  constructor(private formBuilder: FormBuilder, private ObjectifService : ObjectifService){}

  ngOnInit(){
    this.objectifForm = this.formBuilder.group({
      id : [null],
      nom : ['', Validators.required],
      description : ['', Validators.required],
      caloriesCibler : []
    })
  }

  //la methode submit pour envoyer les données du formulaire

  onSubmit(){
    if(this.objectifForm.valid){
      this.newObjectifs = this.objectifForm.value;
      this.ObjectifService.ajoutObjectif(this.newObjectifs);
      this.objectifForm.reset();
    }
  }

  //suppression d'un élement 

  deleteObjectif(objectif : Objectif){
    this.ObjectifService.supprimerObjectifs(objectif);
  }

}
