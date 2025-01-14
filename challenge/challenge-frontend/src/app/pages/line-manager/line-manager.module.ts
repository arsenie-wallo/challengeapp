import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { LineManagePageRoutingModule } from './home-page-routing.module';

import { LineManagerPage } from '../line-manager/line-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [LineManagerPage]
})
export class LineManagerPageModule {}