
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomReuseStrategy } from './routes/custom-reuse-route';
import { RouteReuseStrategy } from '@angular/router';
import { ItemBoxComponent } from './item-box/item-box.component';
import { LoaderComponent } from './loader/loader.component';
// import { ListItemService } from "./service/listItem.service";
@NgModule({
  declarations: [
    ItemBoxComponent,
    LoaderComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [ItemBoxComponent,LoaderComponent],
  providers: [ { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
})
export class SharedModule { }
