import { Component , OnInit } from '@angular/core';
import { ObjectifService } from '../services/objectif.service';
import { Objectif } from '../models/objectif';
import { JournalAlimentaireComponent } from '../journal-alimentaire/journal-alimentaire.component';
import { PlanificationService } from '../services/planification.service';
import { MatDialog } from '@angular/material/dialog';
import { SuiviObjectifsComponent } from '../suivi-objectifs/suivi-objectifs.component';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-liste-objectif',
  templateUrl: './liste-objectif.component.html',
  styleUrls: ['./liste-objectif.component.css']
})
export class ListeObjectifComponent implements OnInit {

  listeService : Objectif [] = [];

  journal : any[] = []; 
  constructor(private service  : ObjectifService, private planingService : PlanificationService, private dialog: MatDialog){}

  ngOnInit(){
    this.journal = this.planingService.getPlaning();
    this.listeService = this.service.getObjectifs();
    // const storageLocal= localStorage.getItem('saveObjectif');
    // if(storageLocal){
    //   this.listeService=JSON.parse(storageLocal);
    // }
  }

  supprimer(objectif : Objectif){
    if(objectif.id && objectif){
      this.service.supprimerObjectifs(objectif);
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
    }else{
      console.log('Impossible de supprimer')
    }
  }

  //Calule de l'evolution du conso calorique
  // calculerCalories(objet : Objectif){
  //   objet.caloriesCibler = objet.caloriesCibler + objet.caloriesCibler * 0.1;
  // }

  // calculer(objectif: Objectif) {
  //   const total = this.journal.find(j => j.calories).length;
  //   this.listeService.forEach(objet => {
  //     objet.caloriesCibler =total + objet.caloriesCibler * 0.1
  //   });
  // }
  // modifier(objet: Objectif){
  //   const dialogRef = this.dialog.open(SuiviObjectifsComponent, {
  //    data: objet
  //   })
  // }
  modifier(objectif: Objectif) {
    const dialogRef = this.dialog.open(SuiviObjectifsComponent, {
      data: { dataObjectif: objectif }
    });
  }
}

