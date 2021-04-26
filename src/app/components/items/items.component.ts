import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
//se importa la clase item
import { Item } from '../../Models/item';
import { ItemService } from "../../services/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  //crea una variable de tipo item
  items: Item[] = [];
  //Crea una variable total:
  total: number = 0;

  constructor(private itemService:ItemService) { }
  
  //Creacion de componente
  ngOnInit(): void {
    //Arreglo para almacenar la informacion
    this.itemService.getItem().subscribe( data => {
      this.items = data;
      this.getTotal();
    })
    
  }
  //OPERACION DE ELIMINAR ITEM
  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  //OPERACION DE ACTUALIZAR ITEM
  toggleItem(item: Item){
    this.itemService.toggleItem(item).subscribe();
    this.getTotal();
  }

  //Crea una funcion para el total del precio:
  getTotal(){
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.quantity * item.price)
                .reduce((acc, item) => acc += item, 0);
  }
}
