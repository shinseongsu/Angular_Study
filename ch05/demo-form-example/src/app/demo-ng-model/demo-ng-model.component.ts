import { Component } from '@angular/core';
import {
  Validators
} from '@angular/forms';

@Component({
  selector: 'demo-ng-model',
  templateUrl: './demo-ng-model.component.html',
  styleUrls: ['./demo-ng-model.component.css']
})
export class DemoNgModelComponent {

  productName: string;

  constructor() {
    this.productName = "ng-book: The Complete Guide to Angular"
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
