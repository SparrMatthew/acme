import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastheadComponent } from './masthead.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [MastheadComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatMenuModule],
  exports: [MastheadComponent],
})
export class MastheadModule {}
