import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDirective } from './bem';
import { ElemDirective } from './bem';
import { HeaderComponent } from './header/header.component';
import { NextComponent } from './next/next.component';

@NgModule({
  declarations: [
    BlockDirective,
    ElemDirective,
    HeaderComponent,
    NextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockDirective,
    ElemDirective,
    HeaderComponent,
    NextComponent
  ]
})
export class AppCommonModule {
  static forRoot() {
    return {
      ngModule: AppCommonModule,
    }
  }
}
