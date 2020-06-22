import { BasicDirective1Directive } from './directive/basic-directive1.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RendererDirective2Directive } from './directive/rendererDirective2.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective1Directive,
    RendererDirective2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
