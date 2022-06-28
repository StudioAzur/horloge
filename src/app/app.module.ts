import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadranComponent } from './cadran/cadran.component';
import { AiguillesComponent } from './aiguilles/aiguilles.component';

@NgModule({
  declarations: [
    AppComponent,
    CadranComponent,
    AiguillesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
