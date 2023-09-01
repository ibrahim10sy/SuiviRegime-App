import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Objectif } from '../models/objectif';
import { ObjectifService } from '../services/objectif.service';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material/dialog';

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
    private dialogRef: MatDialogRef<SuiviObjectifsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Objectif | null 
    @Inject(MAT_DIALOG_DATA) public data: { dataObjectif: Objectif }){
  //   if(Object.keys(data).length == 0 );

    this.objectifForm = this.formBuilder.group({
      id : [''],
      nom : ['', Validators.required],
      description : ['', Validators.required],
      caloriesCibler : ['', Validators.required]
    });

    if (Object.keys(data).length == 0) {
      this.objectifForm.patchValue(data);
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
         console.log(this.data)
        this.objectifForm.reset();
      }
      // this.dialogRef.close();
    }
  }

  //suppression d'un élement 

  deleteObjectif(objectif : Objectif){
    this.ObjectifService.supprimerObjectifs(objectif);
  }

}