import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgZorroAntdModule
  ],

  declarations: [EmployeeListComponent, EmployeeAddComponent]
})
export class EmployeesModule { }
