import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //Se crea la propiedad URL:
  url: string = 'http://localhost:3001/items';
  //Se crea propiedad opciones
  httpOptions = {
   headers:{
     'Content-Type': 'application/json'
   }
  };

  items: Item [] = [
      {
        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'pan',
        price: 3.5,
        quantity: 8,
        completed: true
      },
      {
        id: 2,
        title: 'chamarra',
        price: 300,
        quantity: 1,
        completed: false
      }

  ];
  //Inyectar la informacion de modulo clientes del servidor HTTP
  constructor(private http: HttpClient) { }

  //FUNCION PARA MOSTRAR LA INFORMACION
  getItem():Observable<Item []>{
    //return this.items
    return this.http.get<Item[]>( this.url);
  }

  //FUNCION PARA AGREGAR UN ITEM
  addItem(item: Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  //FUNCION PARA ACTUALIZAR
  toggleItem(item: Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  //FUNCION PARA ELIMINAR
  deleteItem(item: Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }
}
