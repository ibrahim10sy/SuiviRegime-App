import { Component, Input, OnInit } from '@angular/core';
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

 plat: any[] = [];
  p: number = 1;
  constructor(private repasService: RepasService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.plat = this.repasService.getRepas();
    const storageLocal = localStorage.getItem('savePlat');
    if(storageLocal){
     this.plat = JSON.parse(storageLocal)
    }
  }
  afficherRepas() {
    return this.repasService.getRepas();
  }

  supprimerRepas(repas: Repas) {
    this.repasService.supprimerRepas(repas);
    // this.plat = this.repasService.getRepas();

  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(AddRepasComponent, {
      width: '500px', // Ajustez la largeur selon vos besoins
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
    });
  }
}
