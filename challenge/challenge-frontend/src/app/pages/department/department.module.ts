import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { LineManagePageRoutingModule } from './home-page-routing.module';

import { DepartmentPage } from '../department/department.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DepartmentPage]
})
export class DepartmentPageModule {}