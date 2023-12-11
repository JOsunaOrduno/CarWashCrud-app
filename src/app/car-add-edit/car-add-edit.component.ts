import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-add-edit',
  templateUrl: './car-add-edit.component.html',
  styleUrls: ['./car-add-edit.component.scss']
})
export class CarAddEditComponent {
  carForm: FormGroup;

  carros: string[] = [
    'Chico',
    'Mediano',
    'Grande',
  ]

  constructor(private _fb: FormBuilder){ 
    this.carForm = this._fb.group({
      nombre: '',
      apellido: '',
      telefono: '',
      carro: '',
    }); 
  }
  onFormSubmit(){
    if(this.carForm.valid){
      console.log(this.carForm.value);
    }
  }
}
