import { Component, OnInit } from '@angular/core';

@Component({
  //nombre de la etique para llamarlo en el HTML
  selector: 'app-heater',
  //Lugar del HTML
  templateUrl: './heater.component.html',
  //El tipo de estilo CSS
  styleUrls: ['./heater.component.css']
})
export class HeaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
