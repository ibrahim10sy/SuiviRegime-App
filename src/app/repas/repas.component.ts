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

  supprimerRepas(repas: Repas) {

    this.repasService.supprimerRepas(repas);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Attention avous allez supprimer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Supprimer avec succèss',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  afficherImage(repas: Repas) {
    const dialogRef = this.dialog.open(ImageViewComponent, {
      data: { imageUrl: repas.image }
    });
  }


  openDialog(): void {
    const dialogRefAddRepas = this.dialog.open(AddRepasComponent, {
      width: '500px', // Ajustez la largeur selon vos besoins
    });

    dialogRefAddRepas.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
    });
  }
  openEdit(): void {
    const dialogRefEdit = this.dialog.open(EditRepasComponent, {
      width: '500px', // Ajustez la largeur selon vos besoins
    });

    dialogRefEdit.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
    });
  }
}
