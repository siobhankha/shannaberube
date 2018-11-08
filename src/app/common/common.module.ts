import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDirective } from './bem';
import { ElemDirective } from './bem';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    BlockDirective,
    ElemDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockDirective,
    ElemDirective,
    HeaderComponent
  ]
})
export class AppCommonModule {
  static forRoot() {
    return {
      ngModule: AppCommonModule,
    }
  }
}
