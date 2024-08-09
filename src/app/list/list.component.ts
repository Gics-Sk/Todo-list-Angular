import { Component } from '@angular/core';
import { Interfacetodo } from '../interfacetodo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  [x: string]: any;
  todos?: Interfacetodo[];
  donenumber:number=0;
  constructor(private todosService: TodoService) {}
  
  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }
 
  deleteTodo(index: number) {
    this.todosService.deleteTodos(index);
  }
  toogleTaskCompletion(index: number) {
    this.todosService.toogleTaskCompletion(index);
  }
  total(){
   
    return this.todos?.length ;
    console.log( this.todos?.length )
   }

  // showdone():number{
  //   this.todos= this.todosService.getTodos().filter((t)=> t.statut===true);
  //   return this.donenumber=this.todos.length;
  //  }

  // showDone(){
  //  return this.todosService.showdone();
  //  console.log("non")
  // }
}


