import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repas } from '../models/repas';
import { RepasService } from '../services/repas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-repas',
  templateUrl: './add-repas.component.html',
  styleUrls: ['./add-repas.component.css']
})
export class AddRepasComponent implements OnInit {

  repasForm!: FormGroup;
  imageSrc : string | any;
  constructor(private formBuilder: FormBuilder, private repasService: RepasService) {
    this.repasForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      calories: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  get f(){
    return this.repasForm.controls;
  }
  
  ngOnInit() {
  
  }

  onSubmit() {
    if (this.repasForm.valid) {
      const nouveauRepas = this.repasForm.value as Repas;
      this.repasService.ajoutRepas(nouveauRepas);
      console.log(nouveauRepas)
      Swal.fire({
        position: 'center-end',
        icon: 'success',
        title: 'Repas ajouté avec succèss',
        showConfirmButton: false,
        timer: 1500
      })
      this.repasForm.reset();
    }
  }

  //chargement de l'image
  ImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.repasForm.patchValue({ image: e.target.result });
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
        Swal.fire({
          imageUrl:this.imageSrc,
          imageHeight: 150,
          imageAlt: 'A tall image'
        })
        this.repasForm.patchValue({
          
          fileSource: reader.result
          
        });
   
      };
   
    }
  }
 
}
