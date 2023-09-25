
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Objectif } from '../models/objectif';
import { ObjectifService } from '../services/objectif.service';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ListeObjectifComponent } from '../liste-objectif/liste-objectif.component';


@Component({
  selector: 'app-suivi-objectifs',
  templateUrl: './suivi-objectifs.component.html',
  styleUrls: ['./suivi-objectifs.component.css']
})
export class SuiviObjectifsComponent {


  // newObjectifs = new Objectif(1,'','',0);

  objectifForm ! : FormGroup;
 

  constructor(
    private formBuilder: FormBuilder,
    private ObjectifService : ObjectifService ,
    private diaglogRef: MatDialogRef<SuiviObjectifsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Objectif | null 
    @Inject(MAT_DIALOG_DATA) public data: any){
  //   if(Object.keys(data).length == 0 );
console.log(data)
    this.objectifForm = this.formBuilder.group({
      id : [this.data.id??""],
      nom : [this.data.nom??"", Validators.required],
      description : [this.data.description ?? "", Validators.required],
      jour : [this.data.jour ?? "", Validators.required],
      caloriesCibler : [this.data.caloriesCibler ?? "", Validators.required]
    });

    // if (Object.keys(data).length == 0) {
    //   this.objectifForm.patchValue(data);
    // }
    if (data && data.objectif) {
    
      this.objectifForm.patchValue(data.objectif);
  }
  }

  //la methode submit pour envoyer les données du formulaire

  onSubmit(){
    if(this.objectifForm.valid){

      const newObjectifs = this.objectifForm.value as Objectif;
      if(Object.keys(this.data).length !== 0){
        this.ObjectifService.modifierObjectif(newObjectifs)
        console.log(this.data)
      } else{
        this.ObjectifService.ajoutObjectif(newObjectifs);
        Swal.fire({
          position: 'top-left',
          icon: 'success',
          title: 'Objectif crée avec succèss',
          showConfirmButton: false,
          timer: 1500
        })
         console.log(this.data)
        this.objectifForm.reset();
      }

    }
  }

  //suppression d'un élement 

  deleteObjectif(objectif : Objectif){
    this.ObjectifService.supprimerObjectifs(objectif);
  }
}