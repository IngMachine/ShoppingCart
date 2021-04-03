import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenuBarComponent,
    FooterComponent
  ],
  exports: [
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
