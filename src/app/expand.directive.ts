import {  Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@Directive({
  selector: '[appExpand]'
})
export class ExpandDirective {
  @Input() url:string='';
  constructor(private el: ElementRef,
    public dialog: MatDialog) {

   }
   @HostListener('click') onClick(){
      this.openDialog();
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(ImageDialogComponent, {
        data: {url: this.url},
        panelClass: 'custom-dialog-container'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
   }


}
