import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

import { GroupComponent } from './group/group.component';
import { ColumnComponent } from './column/column.component';
import { TaskCardComponent } from './task-card/task-card.component';

const routes: Routes = [
  { path: '', component: GroupComponent }, // ruta por defecto dashboard/
  { path: 'groups', component: GroupComponent },
  { path: 'columns', component: ColumnComponent },
  { path: 'tasks', component: TaskCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
