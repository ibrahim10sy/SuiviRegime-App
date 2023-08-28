import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repas } from '../models/repas';
import { RepasService } from '../services/repas.service';

@Component({
  selector: 'app-add-repas',
  templateUrl: './add-repas.component.html',
  styleUrls: ['./add-repas.component.css']
})
export class AddRepasComponent implements OnInit {

  repasForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private repasService: RepasService) {
    this.repasForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      calories: ['', Validators.required],
      image: [null]
    });
  }

  ngOnInit() {
  
  }

  onSubmit() {
    if (this.repasForm.valid) {
      const nouveauRepas = this.repasForm.value as Repas;
      this.repasService.ajoutRepas(nouveauRepas);
      console.warn(nouveauRepas)
      this.repasForm.reset();
    }
  }

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

  deleteRepas(repas: Repas) {
    this.repasService.supprimerRepas(repas);
  }
}
