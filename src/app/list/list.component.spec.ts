import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemService } from '../shared/service/listItem.service';
import { ListComponent } from './list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
class BypassService {

  getListItems() {
    return of([]);
  }
}
fdescribe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async (): Promise<void> => {
    // const ListItemServiceStub = () => ({
    //   getListItemData: () => ({
    //     subscribe: (f: (arg0: { albumId: number; id: number; title: string; url: string; thumbnailUrl: string; }[]) => any) => f(
    //       [
    //         {
    //           "albumId": 1,
    //           "id": 1,
    //           "title": "accusamus beatae ad facilis cum similique qui sunt",
    //           "url": "https://via.placeholder.com/600/92c952",
    //           "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    //         },
    //         {
    //           "albumId": 1,
    //           "id": 2,
    //           "title": "reprehenderit est deserunt velit ipsam",
    //           "url": "https://via.placeholder.com/600/771796",
    //           "thumbnailUrl": "https://via.placeholder.com/150/771796"
    //         }
    //       ]
    //     )
    //   })
    // })
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ListComponent ],
      providers: [
       BypassService
      ],
      imports: [HttpClientModule]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call for getListitem', () => {
  //   component.getListItemData();
  // });

});
