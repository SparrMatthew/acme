import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastheadComponent } from './masthead.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [MastheadComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MastheadComponent],
})
export class MastheadModule {}
