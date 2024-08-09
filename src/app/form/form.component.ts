import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Interfacetodo } from '../interfacetodo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
@Input() selectedTodo:Interfacetodo | null = null;

  InputForm = new FormGroup({
    task:new FormControl("")
  })
todo: any;
  constructor(private todoService: TodoService){}
ngOnchanges():void{
  if (this.selectedTodo) {
    this.InputForm.value.task=this.selectedTodo.task
  }
}
  addTodos(){
    if (this.InputForm.value.task?.trim()) {
      if (this.selectedTodo) {
        this.todoService.updateTodos(this.selectedTodo.id,this.InputForm.value.task.trim());
      }else{
        this.todoService.addTodos(this.InputForm.value.task.trim());
      }
    }
  //  this.todoService.addTodos(this.InputForm.value.task || " ")
   this.InputForm.reset();
  }

}
