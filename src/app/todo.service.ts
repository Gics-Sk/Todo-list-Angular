import { Injectable } from '@angular/core';
import { Interfacetodo } from './interfacetodo';
import {TODOS} from './mock-todos'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos: Interfacetodo[]=[
];
donenumber:number=0;
nextId:number=1;
  constructor() { }
  // Méthode de stockage des données
  getTodos():Interfacetodo[]{
    return this.todos;
  }
 addTodos(task:string){
  this.todos.push({id:this.nextId++,task:task, statut:false});
 }
 

  deleteTodos(index:number){
   this.todos.splice(index,1)
  }
  toogleTaskCompletion(index:number){
    const todo = this.todos.find(todo=>todo.id ===index);
    if(todo){
      todo.statut = !todo.statut;
    }
  }
  sum:number=0;
  totalTodos(){
     const total:number=this.sum++;
  }

  showdone():number{
    const todo = this.todos.find(todo=>todo.statut ===true);
    if(todo){
      for (let i=1 ; i<todos.length;i++)
    }
    return this.donenumber=this.todos.length;
   }
}
