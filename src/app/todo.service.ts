import { Injectable } from '@angular/core';
import { Interfacetodo } from './interfacetodo';
import {TODOS} from './mock-todos'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos: Interfacetodo[]=TODOS;
  constructor() { }
  // Méthode de stockage des données
  getTodos():Interfacetodo[]{
    return this.todos;
  }
  deleteTodos(index:number){
   this.todos.splice(index,1)
  }
}
