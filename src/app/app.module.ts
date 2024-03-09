import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomReuseStrategy } from './shared/routes/custom-reuse-route';
import { RouteReuseStrategy } from '@angular/router';
import { ListItemService } from './shared/service/listItem.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },ListItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
