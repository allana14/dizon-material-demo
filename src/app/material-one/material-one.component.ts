import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-one',
  templateUrl: './material-one.component.html',
  styleUrls: ['./material-one.component.css']
})
export class MaterialOneComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
