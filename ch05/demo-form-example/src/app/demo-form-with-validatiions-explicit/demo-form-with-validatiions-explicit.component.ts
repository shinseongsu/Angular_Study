import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

@Component({
  selector: 'demo-form-with-validatiions-explicit',
  templateUrl: './demo-form-with-validatiions-explicit.component.html',
  styleUrls: ['./demo-form-with-validatiions-explicit.component.css']
})
export class DemoFormWithValidatiionsExplicitComponent {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
