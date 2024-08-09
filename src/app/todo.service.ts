import { Injectable } from '@angular/core';
import { Interfacetodo } from './interfacetodo';
import {TODOS} from './mock-todos'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos: Interfacetodo[]=[
];
nextId:number=1;
  constructor() { }
  // Méthode de stockage des données
  getTodos():Interfacetodo[]{
    return this.todos;
  }
 addTodos(task:string){
  this.todos.push({id:this.nextId++,task:task, statut:false});
 }
//  updateTodos(index:number, newTask:string){
//   const todo = this.todos.find(todo => todo.id ===index);
//   if (todo) {
//     todo.task = newTask;
//   }
//   console.log(todo);
  
//  }

  deleteTodos(index:number){
   this.todos.splice(index,1)
  }
  toogleTaskCompletion(index:number){
    const todo = this.todos.find(todo=>todo.id ===index);
    if(todo){
      todo.statut = !todo.statut;
    }
  }
}
