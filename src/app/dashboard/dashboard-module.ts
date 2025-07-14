// src/app/dashboard/dashboard-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { GroupComponent } from './group/group.component';
import { ColumnComponent } from './column/column.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { BoardComponent } from './board/board.component'; 

@NgModule({
  declarations: [
    GroupComponent,
    ColumnComponent,
    TaskCardComponent,
    BoardComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
