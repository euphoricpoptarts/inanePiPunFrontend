import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { AllInProgressComponent } from './all-in-progress/all-in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActiveDevicesComponent } from './active-devices/active-devices.component';
import { SegmentsInComputationComponent } from './segments-in-computation/segments-in-computation.component';
import { ComputationComparisonComponent } from './computation-comparison/computation-comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    AllInProgressComponent,
    CompletedComponent,
    HeaderComponent,
    ActiveDevicesComponent,
    SegmentsInComputationComponent,
    ComputationComparisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
