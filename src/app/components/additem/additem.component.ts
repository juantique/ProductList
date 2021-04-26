import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/Models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  //Propiedades de Ingreso de Formulario:
  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor( private itemServie: ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  //Define el metodo de envio de datos para almacenar.
  onSubmit(){
    const item = new Item()
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    //this.itemServie.addItem(item);
    this.itemServie.addItem(item).subscribe( i => {
      this.router.navigate(['/']);
    });
    
  }

}
