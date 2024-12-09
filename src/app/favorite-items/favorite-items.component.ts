import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListItemService } from '../shared/service/listItem.service';


@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.scss']
})
export class FavoriteItemsComponent implements OnInit {
  public favItemList: any = [];

  constructor(public http: ListItemService) { }

  ngOnInit(): void {
     this.http.favItem.subscribe(data => {
      this.favItemList = data;
    });
  }

  ngOnDestroy(): void {       // for triggering the observable in the list component
    this.http.triggerScroll(0);
 
  }

}
