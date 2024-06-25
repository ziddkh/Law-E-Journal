  import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
  import { Component, Inject } from '@angular/core';
  import { Gallery } from '../../models/gallery';

  @Component({
    selector: 'app-image-dialog',
    templateUrl: './image-dialog.component.html',
    styleUrl: './image-dialog.component.scss'
  })
  export class ImageDialogComponent {
    constructor(
      private dialogRef: DialogRef<string>,
      @Inject(DIALOG_DATA) public data: Gallery
    ) {}

    closeModal() {
      this.dialogRef.close()
    }
  }
