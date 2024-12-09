import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListItemService } from '../shared/service/listItem.service';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productDetails: any = [];
  private sub = new Subscription();

  constructor(public http: ListItemService) { }

  ngOnInit(): void {

    if(localStorage.getItem('check')){
      console.log('1')
      this.productDetails = JSON.parse(localStorage.getItem('check') || '{}');
      console.log(this.productDetails)


    }
    this.sub =  this.http.product.subscribe(data => {
      console.log(JSON.stringify(data))
      if(data.length != 0 ){
        this.productDetails = data;
      localStorage.setItem('check', JSON.stringify(data))
      console.log(this.productDetails)
      }
     
    });
  }

  ngOnDestroy(): void {      
    this.sub.unsubscribe();
 
  }

}
