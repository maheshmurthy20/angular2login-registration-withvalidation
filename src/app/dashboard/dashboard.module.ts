import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouteModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouteModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
