import { NgModule } from '@angular/core';
import { Component, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[popup]'
})
export class PopupDirective {
  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }
}

@Component({
  selector: 'app-pop-demo',
  template: `
  <div class="ui message" popup>
    <div class="header">
      Learning Directives
    </div>
    <p>
      This should use our Popup diretive
    </p>
  </div>
  <i class="alarm icon" popup></i>
  `
})
export class PopupDemoComponent2 {
}

@NgModule({
  declarations: [
    PopupDemoComponent2,
    PopupDirective
  ],
  exports: [ PopupDemoComponent2 ]
})
export class PopupDemoComponent2Module {}