// src/app/dashboard/dashboard-routing.module.ts
import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';

import { GroupComponent } from './group/group.component';
import { ColumnComponent } from './column/column.component';
import { TaskCardComponent } from './task-card/task-card.component';

const routes: Routes = [
  // Al entrar a /dashboard, redirige a /dashboard/groups
  { path: '', redirectTo: 'groups', pathMatch: 'full' },

  // Lista de grupos
  { path: 'groups', component: GroupComponent },

  // Más adelante, podrías anidar proyectos bajo cada grupo:
  // { path: 'groups/:groupId/projects', component: ProjectListComponent },
  // { path: 'groups/:groupId/projects/:projectId/board', component: BoardComponent },

  // Mientras tanto, rutas sueltas para columnas y tareas (si las necesitas)
  { path: 'columns', component: ColumnComponent },
  { path: 'tasks', component: TaskCardComponent },

  // Ruteo comodín (opcional)
  { path: '**', redirectTo: 'groups' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
