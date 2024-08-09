import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Interfacetodo } from '../interfacetodo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  task:Interfacetodo[]=[]
  InputForm = new FormGroup({
    task:new FormControl("")
  })
  onSubmit(){
    console.log(this.InputForm.value);
    
  }

}
