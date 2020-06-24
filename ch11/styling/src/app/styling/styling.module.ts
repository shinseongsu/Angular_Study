import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineStyleComponent } from './inline-style/inline-style.component';
import { ExternalStyleComponet } from './external-style/external-style.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      InlineStyleComponent,
      ExternalStyleComponet
    ]
  })
  
export class StylingModule { }