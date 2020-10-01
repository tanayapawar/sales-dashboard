import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunnelSectionComponent } from './funnel-section/funnel-section.component';
import { SalesTableComponent } from './sales-table/sales-table.component';
@NgModule({
  declarations: [
    AppComponent,
    FunnelSectionComponent,
    SalesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
