import { Component, OnInit, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';
import { ListItemService } from '../shared/service/listItem.service';
import * as _ from 'lodash'; 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit , AfterViewInit   {

  public pageIndex: number = 1;
  public listItemArray: any = [];
  public loader: boolean = true ;
  public scrollTopPosition = 0;
  @ViewChild('list', { static: false }) public list!: ElementRef<HTMLElement>;
  public selectedFavItemArray: any = []

  public filterFlag: boolean = false;
  filterData: any;
  public masterData: any = [];

  constructor(private service: ListItemService) { }

  ngOnInit(): void {
    this.service.getListItems(this.pageIndex).subscribe((data)=>{
      this.masterData = data.products;
      this.masterData.forEach((obj: any) => {
      obj.addFav = false
      });
      this.listItemArray = _.cloneDeep(this.masterData)
      this.loader = false;
    });

   
  }

  public ngAfterViewInit(){
    this.service.scrollItem.subscribe(data => {
      setTimeout(() => {                               
        this.scrollTopPosition = data
      }, 200);
    });
  }

  public getListItemData(): void {
    this.service.getListItems(this.pageIndex).subscribe((data: any)=>{
      data.products.forEach((obj: any) => {
        obj.addFav = false
        });
      this.masterData = [...this.masterData, ...data.products];
      this.listItemArray = _.cloneDeep(this.masterData)
      this.loader = false;
    });

    // console.log(this.listItemArray)
  }
  
  public onScrollLoadData(): void {
    const nativeElement= this.list.nativeElement
    this.service.scrollTop = nativeElement.scrollTop;       // saving the last scrolled position
    if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) >= nativeElement.scrollHeight && !this.loader){      // do not call API or increment pageindex unit loader is false
      console.log(' Bottom', this.pageIndex, this.masterData.length)
      if(this.masterData.length === (this.pageIndex*10)){
      this.pageIndex += 1; 
      this.loader = true;
      this.getListItemData()
      }
    }
  }

  public addFav(itemObj: any): void{
    itemObj.addFav = true
    this.selectedFavItemArray.push(itemObj)
    this.service.updateFavItemList(this.selectedFavItemArray);

  }

  public removeFav(itemObj: any): void{
    itemObj.addFav = false
    const index = this.selectedFavItemArray.findIndex(
      (obj: any) => obj.id === itemObj.id
    );
    this.selectedFavItemArray.splice(index, 1);
    this.service.updateFavItemList(this.selectedFavItemArray);
   
  }


  public applyFilter(filterData: any): void {
    console.log(filterData)

    // this.listItemArray = []

    this.listItemArray = this.masterData.filter( (obj: any) => 
      obj.rating < filterData.selectedFilter && 
      obj.price >= filterData.minValue && 
      obj.price <= filterData.maxValue
    );

    console.log(this.listItemArray)

  }

  
  
  public lowToHigh(): void {
    this.listItemArray.sort((a: { price: any; }, b: { price: any; }) => parseFloat(a.price) - parseFloat(b.price));
  }

  public highToLow(): void {
    this.listItemArray.sort((a: { price: any; }, b: { price: any; }) => parseFloat(b.price) - parseFloat(a.price));
  }

}
