import { Component, OnInit, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';
import { ListItemService } from '../shared/service/listItem.service';
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

  constructor(private service: ListItemService) { 
  
  }

  ngOnInit(): void {
    this.service.getListItems(this.pageIndex).subscribe((data)=>{
      this.listItemArray = data;
      this.listItemArray.forEach((obj: any) => {
      obj.addFav = false
      });
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
      data.forEach((obj: any) => {
        obj.addFav = false
        });
      this.listItemArray = [...this.listItemArray, ...data];
      this.loader = false;
    });

    // console.log(this.listItemArray)
  }
  
  public onScrollLoadData(): void {
    const nativeElement= this.list.nativeElement
    this.service.scrollTop = nativeElement.scrollTop;       // saving the last scrolled position
    if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) >= nativeElement.scrollHeight && !this.loader){      // do not call API or increment pageindex unit loader is false
      console.log(' Bottom')
      if(this.listItemArray.length === (this.pageIndex*10)){
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


  
  

}
