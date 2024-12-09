
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { CustomReuseStrategy } from './routes/custom-reuse-route';
import { RouteReuseStrategy } from '@angular/router';
import { ItemBoxComponent } from './item-box/item-box.component';
import { LoaderComponent } from './loader/loader.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HeaderComponent } from './header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ProductFilterComponent } from './product-filter/product-filter.component'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
// import { ListItemService } from "./service/listItem.service";
@NgModule({
  declarations: [
    ItemBoxComponent,
    LoaderComponent,
    StarRatingComponent,
    HeaderComponent,
    ProductFilterComponent,

  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgxSliderModule,
    FormsModule
  ],
  exports: [ItemBoxComponent,LoaderComponent,StarRatingComponent,HeaderComponent,ProductFilterComponent],
  providers: [ { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
})
export class SharedModule { }
