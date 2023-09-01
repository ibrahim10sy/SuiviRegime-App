import { Component , Inject} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})

export class ImageViewComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }) { }

}
