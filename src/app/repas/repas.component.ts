import { Component, OnInit } from '@angular/core';
import { RepasService } from '../services/repas.service';
import { AddRepasComponent } from '../add-repas/add-repas.component';
import { MatDialog } from '@angular/material/dialog'
import { Repas } from '../models/repas';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {

  plat: Repas[] | any;

  constructor(private repasService: RepasService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.plat = this.repasService.getRepas();
  }
  afficherRepas() {
    return this.repasService.getRepas();
  }

  supprimerRepas(repas: Repas) {
    this.repasService.supprimerRepas(repas);
    this.plat = this.repasService.getRepas();

  }
  openDialog() {
    this.dialog.open(AddRepasComponent);
  }
}
