import { Injectable } from '@angular/core';
import { TodoInterface } from './todo-interface';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
task:TodoInterface[]=TASKS;

  getTasks():TodoInterface[]{
  return  this.task;
  }
}
