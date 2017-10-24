import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OldGamePage } from './old-game';

@NgModule({
  declarations: [
    OldGamePage,
  ],
  imports: [
    IonicPageModule.forChild(OldGamePage),
  ],
})
export class OldGamePageModule {}
