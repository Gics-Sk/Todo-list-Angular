import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';
import { TASKS } from '../../mock-tasks';
import { TodoInterface } from '../todo-interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  
  tasks:TodoInterface[] = TASKS;
  constructor( private myService: FormService){

  }
  TaskForm = new FormGroup ({
 task:new FormControl
  })
onSubmit(){
  console.log('bon')
  
this.tasks.push(this.TaskForm.value.task)

  console.log(this.tasks)
}
  
  ngOnInit(): void {
    this.tasks = this.myService.getTasks();

    // this.myService.getTasks().subscribe( users =>{
    //   this.users=users;

    // this.TaskForm.value.task = this.tasks;

    console.log(this.tasks)

  }
}
