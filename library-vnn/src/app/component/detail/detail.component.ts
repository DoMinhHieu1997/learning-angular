import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConnectionService } from 'src/app/service/api-connection.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  paramAlias:string;

  relatedNews = [];

  hasRelatesNews = false;

  detailInfo:any;

  listImages:any = [];

  hasImages = false;

  page = 0;

  showloading = true;

  showloadMore = true;

  isClub = false;

  isPolitician = false;

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(
    private route: ActivatedRoute,
    private connect: ApiConnectionService
  ) {
    // this.getMoreRelatedNews();
  }

  getMoreRelatedNews(alias:string,page:number) {
    this.connect.getIdtag(alias).subscribe(data => {
      let id = JSON.parse(data.replace('retvar = ','').replace(',',''));
      if ( id.length > 0 ) {
        this.connect.getRelatedNews(id[0].idtag,page).subscribe(list=>{
          let news = JSON.parse(list.replace('retvar = ',''));
          if (news.length > 0) {
            this.page = ++page;
            if (news.length > 0) {
              for (let i = 0; i < news.length; ++i) {
                this.relatedNews.push(news[i]);
              }
            }

            this.showloadMore = true;
            this.showloading = true;
          } else {
            this.showloadMore = false;
            this.showloading = true;
          }
        });
      } else {
        this.hasRelatesNews = true;
      }
    });
  }

  ngOnInit(): void {
    this.paramAlias = this.route.snapshot.paramMap.get('alias');
    this.connect.getDetailInfo(this.paramAlias).subscribe(data => {
      this.detailInfo = data.data;
      this.listImages = this.detailInfo.images;
      if (this.listImages.length <= 0) this.hasImages = true;
      if (this.detailInfo.groupAlias == "cau-lac-bo") this.isClub = true;
    });
    this.getMoreRelatedNews(this.paramAlias,++this.page);
  }
}
