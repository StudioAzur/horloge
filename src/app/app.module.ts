import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadranComponent } from './cadran/cadran.component';
import { AiguillesComponent } from './aiguilles/aiguilles.component';
import { VillesComponent } from './villes/villes.component';
import { TimezoneComponent } from './timezone/timezone.component';

@NgModule({
  declarations: [
    AppComponent,
    CadranComponent,
    AiguillesComponent,
    VillesComponent,
    TimezoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
