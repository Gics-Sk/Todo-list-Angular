import { Injectable } from '@angular/core';
import { TodoInterface } from './todo-interface';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
tasks:TodoInterface[]=[
  {
    id:1,
    task:"okkkkk",
    statut:false
  },
  {
    id:2,
    task:"rrrrkkkk",
    statut:false
  },
  {
    id:3,
    task:"ouuukkk",
    statut:false
  }
];
  nextId:number=1;
  getTasks(){
  return  this.tasks;
  };
  addTasks(task:string){

   this.tasks.push({id:this.nextId++, task:task,statut:false});
  
   
  }
}
