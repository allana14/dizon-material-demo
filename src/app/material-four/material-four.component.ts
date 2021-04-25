import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'app-material-four',
  templateUrl: './material-four.component.html',
  styleUrls: ['./material-four.component.css']
})
export class MaterialFourComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogBoxComponent);
  }
  ngOnInit(): void {
  }

}
