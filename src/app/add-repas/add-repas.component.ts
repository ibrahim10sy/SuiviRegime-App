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

  nouveauRepas = new Repas(1, '', '', 0, '');

  repasForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private repasService: RepasService) { }

  ngOnInit() {
    this.repasForm = this.formBuilder.group({
      id: [null],
      nom: ['', Validators.required],
      description: ['', Validators.required],
      calories: ['', Validators.required],
      image: [null]
    });
  }

  onSubmit() {
    if (this.repasForm.valid) {
      this.nouveauRepas = this.repasForm.value;
      this.repasService.ajoutRepas(this.nouveauRepas);
      console.warn(this.nouveauRepas);
      this.repasForm.reset();
    }
  }

  deleteRepas(repas: Repas) {
    this.repasService.supprimerRepas(repas);
  }
}
