import { Component } from '@angular/core';
import { RepasService } from '../services/repas.service';
import { RepasComponent } from '../repas/repas.component';
import { Repas } from '../models/repas';

@Component({
  selector: 'app-edit-repas',
  templateUrl: './edit-repas.component.html',
  styleUrls: ['./edit-repas.component.css']
})
export class EditRepasComponent {

  constructor(private service : RepasService , compo : RepasComponent) { }
private data : string[] = [];
  ngOnInit() {
    // this.data = compo.data;
  }
}
