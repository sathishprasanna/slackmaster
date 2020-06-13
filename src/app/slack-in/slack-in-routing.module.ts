import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlackINPage } from './slack-in.page';

const routes: Routes = [
  {
    path: '',
    component: SlackINPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlackINPageRoutingModule {}
