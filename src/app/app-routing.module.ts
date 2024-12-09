import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteItemsComponent } from './favorite-items/favorite-items.component';
import { ListComponent } from './list/list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', 
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'list' }, 
    { path: 'list', component: ListComponent, data: {reuseRoute: true} },
  ]
  },
  { path: 'fav-items', component: FavoriteItemsComponent},
  { path: 'product-detail', component: ProductDetailComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',  anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
