import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomReuseStrategy } from './shared/routes/custom-reuse-route';
import { RouteReuseStrategy } from '@angular/router';
import { ListItemService } from './shared/service/listItem.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavoriteItemsComponent } from './favorite-items/favorite-items.component';
import { NgOptimizedImage } from '@angular/common'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductDetailComponent,
    FavoriteItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgOptimizedImage,
    NgxSliderModule
  ],
  providers: [ { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },ListItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
