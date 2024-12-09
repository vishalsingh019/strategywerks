import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(  private route: Router,) { }

  ngOnInit(): void {
  }

  public favItem(): void {
    this.route.navigate(['fav-items']);
  }

  public logoClicked(): void {
    this.route.navigate(['list']);
  }

}
