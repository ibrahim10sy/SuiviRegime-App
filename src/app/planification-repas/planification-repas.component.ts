import { Component } from '@angular/core';
import { PlanificationService } from '../services/planification.service';
import { Planification } from '../models/planification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repas } from '../models/repas';
import { RepasService } from '../services/repas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planification-repas',
  templateUrl: './planification-repas.component.html',
  styleUrls: ['./planification-repas.component.css']
})
export class PlanificationRepasComponent {

  // newPlaning  = new Planification(1,'','',[],'');
  repasSelect : Repas [] | any;
  planingForm ! : FormGroup;

  constructor(private formBuilder: FormBuilder, private planingService : PlanificationService,  private repService : RepasService){

    this.planingForm = this.formBuilder.group({
      id : [''],
      nom : ['', Validators.required],
      description : ['', Validators.required],
      repas : ['', Validators.required],
      jour : ['', Validators.required]
    })

  }

  ngOnInit(){
    //recuperation des repas dans le composant planification

    this.repasSelect = this.repService.getRepas();
  }

  onSubmit(){
    if(this.planingForm.valid){
      const newPlaning = this.planingForm.value as Planification;
      this.planingService.ajoutPlaning(newPlaning);
      console.log(newPlaning);
      Swal.fire({
        position: 'center-end',
        icon: 'success',
        title: 'Repas planifié avec succèss',
        showConfirmButton: false,
        timer: 1500
      })

      this.planingForm.reset();
    }
  }

  deletePlaning(planing : Planification){ 
    this.planingService.supprimerPlaning(planing);
  }
}
