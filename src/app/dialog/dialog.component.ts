import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef =  this.dialog.open(DialogContentComponent, {data: {name: 'Akshay'}});

    dialogRef.afterClosed().subscribe(result => {
      // if result is true then keep them signed in or result is false then logged them out.
        console.log(`Dialog result: ${result}`);
    });
  }

}
