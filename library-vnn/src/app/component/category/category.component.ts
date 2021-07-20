import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApiConnectionService } from '../../service/api-connection.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class CategoryComponent implements OnInit {

  path:any;

  title:string;

  page = 0;

  initLoad:any;

  list = [];

  showMore = true;

  showLoading = true;

  array = Array(16).fill(0);

  constructor(
    private connect:ApiConnectionService,
    private location:Location
  ) {
    this.path = location;
  }

  getDataByPath() {
    this.showMore = false;
    this.showLoading = false;
    this.path = this.location.path().replace('/','');
    this.title = this.path;

    this.connect.getListMembers(this.path,++this.page,16).subscribe(data => {
      let result = data.data;
      if (result.length > 0) {
        for (let i = 0; i < result.length; ++i) {
          let item = result[i];
          this.list.push(item);
        }
        this.initLoad = true;

        this.showMore = true;
        this.showLoading = true;
      } else if (result.length == 0) {
        this.showMore = false;
        this.showLoading = true;
      }
    })
  }

  ngOnInit(): void {
    this.getDataByPath();
  }
}
