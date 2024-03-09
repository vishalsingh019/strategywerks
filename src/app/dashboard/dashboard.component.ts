import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListItemService } from '../shared/service/listItem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
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
