import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'node:stream';
import { Item } from 'src/app/Models/item';
//import { EventEmitter } from '@angular/core';
//import { EventEmitter }

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Se crea un evento de entrada para hacer saber que se recibe un objeto
  @Input() item: Item = new Item();
  //Se crea un evento para eliminar un item desde items.component.ts
  @Output() deleteItem: EventEmitter <Item> = new EventEmitter();
  //Crear un evento para actualizar un evento. Agregar valores:
  @Output() toggleItem: EventEmitter <Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Se crea la accion para eliminar un item. Se llama el evento deleteItem:
  onDelete(item: Item){
    this.deleteItem.emit(item);
  }

  //Se crea la accion para seleccinar el producto onToggle
  onToggle(item: Item){
    item.completed = ! item.completed;
    this.toggleItem.emit(item);
  }

}
