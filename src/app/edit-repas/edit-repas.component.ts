import { Component, OnInit, Inject } from '@angular/core';
import { RepasService } from '../services/repas.service';
import { Repas } from '../models/repas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-repas',
  templateUrl: './edit-repas.component.html',
  styleUrls: ['./edit-repas.component.css']
})
export class EditRepasComponent {

  editForm !: FormGroup;
  imageSrc : string | any;

  constructor(private service : RepasService, private fb : FormBuilder, @Inject(MAT_DIALOG_DATA) public data : {repas : Repas} ,private dialogRef: MatDialogRef<EditRepasComponent>,) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      nom: [this.data.repas.nom, Validators.required],
      description: [this.data.repas.description, Validators.required],
      calories: [this.data.repas.calories, Validators.required],
      image: ['']
    });   
}

  onSubmit(){
    if (this.editForm.valid) {

      const updateRepas: Repas = {
       
        id: this.data.repas.id,
        nom: this.editForm.value.nom,
        description: this.editForm.value.description,
        calories: this.editForm.value.calories,
        image: this.editForm.value.image,
        consommer : this.editForm.value.consommer
      };
  
      this.service.modifierRepas(updateRepas);
      console.log(updateRepas);  
      this.dialogRef.close(updateRepas);
    }
  }

  //chargement de l'image
  ImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editForm.patchValue({ image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }
  //prevusialistion de l'image
  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
      
        this.editForm.patchValue({
          
          fileSource: reader.result
          
        });
   
      };
   
    }
  }
}
