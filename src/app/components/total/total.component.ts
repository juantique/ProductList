import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  //Se crea propiedad:
  @Input() total:number = 0;
  //Se crea propiedad:
  @Input() mensaje:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
