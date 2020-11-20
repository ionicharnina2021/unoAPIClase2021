import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertandoPage } from './alertando.page';

const routes: Routes = [
  {
    path: '',
    component: AlertandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertandoPageRoutingModule {}
