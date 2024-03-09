import { Component, OnInit, ViewChild, Input, Output, TemplateRef, EventEmitter, ViewEncapsulation } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    // console.log(this.itemObj)
  }

  public addFav(itemObj: any): void {
    this.AddFavClickEvent.emit(itemObj);
  }

  public removeFav(itemObj: any): void {
    this.RemoveFavClickEvent.emit(itemObj);

  }

}
