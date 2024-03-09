import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListItemService {
  private newSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  public favItem: Observable<any[]> = this.newSubject.asObservable();


  private newScroll = new BehaviorSubject(0)
  scrollItem = this.newScroll.asObservable();

  public scrollTop: number = 0;

  constructor(private http: HttpClient) { }

  public getListItems(pageIndex: number): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${pageIndex}&_limit=10`);
  }

  updateFavItemList(data: any[]): void {
    this.newSubject.next(data);
  }


  triggerScroll(data: any): void{  
    this.newScroll.next(this.scrollTop);
  }

   
}