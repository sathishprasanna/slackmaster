import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlackINPageRoutingModule } from './slack-in-routing.module';

import { SlackINPage } from './slack-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlackINPageRoutingModule
  ],
  declarations: [SlackINPage]
})
export class SlackINPageModule {}
