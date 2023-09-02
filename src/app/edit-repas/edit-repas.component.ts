import { Component } from '@angular/core';
import { RepasService } from '../services/repas.service';


@Component({
  selector: 'app-edit-repas',
  templateUrl: './edit-repas.component.html',
  styleUrls: ['./edit-repas.component.css']
})
export class EditRepasComponent {

  constructor(private service : RepasService) { }

  ngOnInit() {
  }
}
