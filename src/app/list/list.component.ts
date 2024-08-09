import { Component } from '@angular/core';
import { Interfacetodo } from '../interfacetodo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  
  todos?: Interfacetodo[];
  selectedTodo: Interfacetodo | null = null;
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
  selectTodo(todo:Interfacetodo){
    this.selectedTodo = {...todo};
    console.log({...todo}.task);
    
  }
}
