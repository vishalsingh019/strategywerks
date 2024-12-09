import { Component, OnInit, ViewChild, Input, Output, TemplateRef, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListItemService } from '../service/listItem.service';
@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent implements OnInit {
  @Input() itemObj: any ;
  @Input() showButtons: boolean = true ;
  @Output() public AddFavClickEvent: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() public RemoveFavClickEvent: EventEmitter<Event> = new EventEmitter<Event>();
  constructor(
    private route: Router,
    private http: ListItemService
  ) { }

  ngOnInit(): void {
    // console.log(this.itemObj)
  }

  public addFav(itemObj: any): void {
    this.AddFavClickEvent.emit(itemObj);
  }

  public removeFav(itemObj: any): void {
    this.RemoveFavClickEvent.emit(itemObj);
  }

  public productClicked(item: any): void {
    this.http.getProductDetails(item);
    this.route.navigate(['product-detail']);
  }

}
