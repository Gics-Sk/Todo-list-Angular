import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Interfacetodo } from '../interfacetodo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  InputForm = new FormGroup({
    task:new FormControl("")
  })
  constructor(private todoService: TodoService){}

  addTodos(){
   this.todoService.addTodos(this.InputForm.value.task || " ")
  }

}
