import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ApiConnectionService } from '../../service/api-connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //feature
  infor:any;

  relatednews: any;

  story: any;

  // highlight
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
        items: 1
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

  highlight:any;

  //politician
  politician:any;

  //athlete
  athlete:any;

  //club
  club:any;

  //star
  star:any;

  constructor( private connect:ApiConnectionService ) {}

  getFeature() {
    this.connect.getVBoxTop('tieu-diem-trong-ngay').subscribe(data=>{
      let result = data;
      this.infor = result.data.objects[0];
      this.connect.getIdtag(this.infor.alias).subscribe(idtag=>{
        let result_1 = JSON.parse(idtag.replace('retvar = ','').replace(',',''));
        this.connect.getRelatedNews(result_1[0].idtag,1).subscribe(list=>{
          let result_2 = JSON.parse(list.replace('retvar = ',''));
          this.relatednews = result_2;
        });
      });
      this.connect.getDetailInfo(this.infor.alias).subscribe(detail=>{
        this.story = detail.data.story.slice(0,310) + '...';
      });
    });
  }

  getHighlight() {
    this.connect.getVBoxTop('noi-bat-trang-chu').subscribe(data=>{
      this.highlight = data.data.objects;
    });
  }

  getPolitician() {
    this.connect.getListMembers('chinh-tri-gia',1,8).subscribe(data => {
      this.politician = data.data;
    })
  }

  getAthlete() {
    this.connect.getListMembers('van-dong-vien',1,8).subscribe(data => {
      this.athlete = data.data;
    })
  }

  getClub() {
    this.connect.getListMembers('cau-lac-bo',1,8).subscribe(data => {
      this.club = data.data;
    })
  }

  getStar() {
    this.connect.getListMembers('sao',1,8).subscribe(data => {
      this.star = data.data;
    })
  }

  ngOnInit(): void {
    this.getFeature();
    this.getHighlight();
    this.getPolitician();
    this.getAthlete();
    this.getClub();
    this.getStar();
  }

}
