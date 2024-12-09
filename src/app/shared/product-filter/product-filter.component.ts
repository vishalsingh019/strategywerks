import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Output() public filterButtonClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public cancelButtonClickEvent: EventEmitter<Event> = new EventEmitter<Event>();
  minValue: number = 2;
  maxValue: number = 2000;
  options: Options = {
    floor: 2,
    ceil: 2000,
    noSwitching: true,
    translate: (value: number): string => {
      return '₹' + value;
    },
    showSelectionBar: true,
    selectionBarGradient: {
      from: 'white',
      to: '#ffd700'
    }
  };
  selectedFilter = 6
  constructor() { }

  ngOnInit(): void {
  }

  public applyFilter(): void {
    const filterData = {
      minValue : this.minValue,
      maxValue : this.maxValue,
      selectedFilter: this.selectedFilter
    }

    console.log(filterData)
    this.filterButtonClickEvent.emit(filterData);
  }

  public cancelClicked(): void {
    this.cancelButtonClickEvent.emit();
  }

}
