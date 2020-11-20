import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertandoPageRoutingModule } from './alertando-routing.module';

import { AlertandoPage } from './alertando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertandoPageRoutingModule
  ],
  declarations: [AlertandoPage]
})
export class AlertandoPageModule {}
