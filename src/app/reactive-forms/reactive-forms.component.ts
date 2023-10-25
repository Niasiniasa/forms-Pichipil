import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenName, noAlejandraValidator } from '../utils/custom-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
userForm: FormGroup;

  constructor(
    private FormBuilder: FormBuilder
  ) {
    this.userForm = this.FormBuilder.group({
      //email: this.FormBuilder.control(''),
      name: ['', [Validators.required, forbiddenName('alejandra')]],
      // name: ['', [Validators.required, noAlejandraValidator]],

      email: ['', [Validators.required, Validators.email]],
      password: this.FormBuilder.control(''),
    });
  }
  
  get nameControl(){
    return this.userForm.controls['name']
  }

  get emailControl(){
    return this.userForm.controls['email']
  }
  

  onsubmit(): void{
    if (this.userForm.invalid){
      alert('Formulario invalido');
    } else {
      console.log(this.userForm.value);
    } 

  }
      //console.log(this.userForm.valid);
      //console.log(this.userForm.value);
}


function emailControl() {
  throw new Error('Function not implemented.');
}

