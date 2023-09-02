import { Component, OnInit } from '@angular/core';
import { Repas } from '../models/repas';
import { PlanificationService } from '../services/planification.service';
import { Planification } from '../models/planification';
import { RepasService } from '../services/repas.service';
import Swal from 'sweetalert2';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-journal-alimentaire',
  templateUrl: './journal-alimentaire.component.html',
  styleUrls: ['./journal-alimentaire.component.css']
})
export class JournalAlimentaireComponent implements OnInit {

  liste: Planification[] = [];
  listeRepas: Repas[] = [];
  consommer: Repas[] = [];
  p: number = 1;
  constructor(
    private planificationService: PlanificationService,
    private repasService: RepasService
  ) { }

  saveRepasConsommer() {
    localStorage.setItem('consommer', JSON.stringify(this.consommer));
  }
  ngOnInit(): void {

    //recuperation des repas
    this.listeRepas = this.repasService.getRepas();

    //receuperation des planifications
    this.liste = this.planificationService.getPlaning();
    console.log(this.liste);
    // const depotLocal = localStorage.getItem('savePlanification');
    // if (depotLocal) {
    //   this.liste = JSON.parse(depotLocal);
    //   console.warn(this.liste);
    // }
  }

  //marquer les repas comme consommées
  repasConsommee(repasId: number): void {
    //verification des repas recuperer 
    console.log("id du repas" + repasId);
    console.log("le repas liste " + this.listeRepas);

    //filtrage des repas par id
    const repas = this.listeRepas.find(index => index.id === repasId);
    if (repas && repas.id) {

      //mise a jour des repas comme consommée
      repas.consommer = true;
      this.consommer.push(repas);
      this.saveRepasConsommer();
      console.log('repas consommée est : ', repasId);

      localStorage.setItem(`consommer_${repasId}`, JSON.stringify(repas.consommer));
    } else {

      console.error("repas introuvable");
    }

  }
  getRepasConsomme(repasId: number): boolean {
    const state : any = localStorage.getItem(`consommer_${repasId}`);
    this.consommer = JSON.parse(state)
    return state; 
  }
 
  supprimer(planing: Planification): void {

    if (planing) {
      this.planificationService.supprimerPlaning(planing);
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
      this.liste = this.liste.filter(p => p !== planing);
      localStorage.setItem('savePlanification', JSON.stringify(this.liste)); // Assurez-vous d'utiliser la bonne clé
    }
    else {
      console.log("Impossible de supprimer : planing indéfini.");
    }


  }
}

