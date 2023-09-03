import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repas } from '../models/repas';
import { RepasService } from '../services/repas.service';

@Component({
  selector: 'app-edit-repas',
  templateUrl: './edit-repas.component.html',
  styleUrls: ['./edit-repas.component.css']
})
export class EditRepasComponent implements OnInit {

  @Output() repasUpdated = new EventEmitter<Repas>();

  editForm!: FormGroup;
  imageSrc : string|any;

  constructor(
    private formBuilder: FormBuilder,
    private repasService: RepasService,
    @Inject(MAT_DIALOG_DATA) public data: { repas: Repas },
    private dialogRef: MatDialogRef<EditRepasComponent>
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      nom: [this.data.repas.nom, Validators.required],
      description: [this.data.repas.description, Validators.required],
      calories: [this.data.repas.calories, Validators.required],
      image: [this.data.repas.image]
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedRepas: Repas = {
        ...this.data.repas, 
        ...this.editForm.value 
      };

      this.repasService.modifierRepas(updatedRepas);

      this.repasUpdated.emit(updatedRepas);

      this.dialogRef.close();
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
