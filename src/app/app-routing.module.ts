import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllInProgressComponent } from './all-in-progress/all-in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { ActiveDevicesComponent } from './active-devices/active-devices.component';
import { SegmentsInComputationComponent } from './segments-in-computation/segments-in-computation.component';
import { ComputationComparisonComponent } from './computation-comparison/computation-comparison.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CompletedComponent
  },
  {
    path: 'inProgress',
    pathMatch: 'full',
    component: AllInProgressComponent
  },
  {
    path: 'activeDevices',
    pathMatch: 'full',
    component: ActiveDevicesComponent
  },
  {
    path: 'computationSegments/:computation',
    pathMatch: 'full',
    component: SegmentsInComputationComponent
  },
  {
    path: 'computationComparison/:computation',
    pathMatch: 'full',
    component: ComputationComparisonComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
