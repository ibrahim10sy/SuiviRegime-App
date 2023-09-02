import { Component, Input, OnInit } from '@angular/core';
import { RepasService } from '../services/repas.service';
import { AddRepasComponent } from '../add-repas/add-repas.component';
import { MatDialog } from '@angular/material/dialog'
import { Repas } from '../models/repas';
import Swal from 'sweetalert2'
import { ImageViewComponent } from '../image-view/image-view.component';
import { EditRepasComponent } from '../edit-repas/edit-repas.component';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {

  plat: any[] = [];
  p: number = 1;
  imageSrc: string | any;

  constructor(private repasService: RepasService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.plat = this.repasService.getRepas();
    const storageLocal = localStorage.getItem('savePlat');
    if (storageLocal) {
      this.plat = JSON.parse(storageLocal)
    }
  }
  afficherRepas() {
    return this.repasService.getRepas();
  }

  //supprimer
  supprimer(repas: Repas) {
    if (repas && repas.id) {
      this.repasService.supprimerRepas(repas);
    } else {
      console.log("Repas non valide : ", repas);
    }
  }

  //affichage d el'image en gros plan
  afficherImage(repas: Repas) {
    const dialogRef = this.dialog.open(ImageViewComponent, {
      data: { imageUrl: repas.image }
    });
  }


  openDialog(){
    const dialogRefAddRepas = this.dialog.open(AddRepasComponent, {
      width: '500px', // Ajustez la largeur selon vos besoins
    });

    dialogRefAddRepas.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
    });
  }
  openEdit(repas:Repas){
    const dialogRefEdit = this.dialog.open(EditRepasComponent, {
      width: '500px', 
      data: {repas}
    });

    dialogRefEdit.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
    });
  }
}
