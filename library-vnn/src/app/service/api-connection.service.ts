import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boxtop } from '../model/boxtop-model';
import { Vprofile } from '../model/vprofile-model';
import { DetailInfo } from '../model/detailinfo-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http:HttpClient ) { }

  getVBoxTop(alias:string): Observable<Boxtop> {
    let url = "https://prof-srv.vietnamnet.vn/boxtop/getnewhot?alias="+alias;
    return this.http.get<Boxtop>(url);
  }

  getIdtag(alias:string){
    let url = "https://vietnamnet.vn/jsx/getidbytagalias/?domain=desktop&k="+alias;
    return this.http.get(url,{responseType:'text'});
  }

  getRelatedNews(idtag:number,page:number){
    let url = "https://vietnamnet.vn/jsx/lstarticlebytag/?domain=desktop&k="+idtag+"&p="+page+"&s=8";
    return this.http.get(url,{responseType:'text'});
  }

  getListMembers(groupalias:string,page:number,pageSize:number): Observable<Vprofile>{
    let url = "https://prof-srv.vietnamnet.vn/n1qlprofiles/listbygroup?groupalias="+groupalias+"&p="+page+"&ps="+pageSize;
    return this.http.get<Vprofile>(url);
  }

  getDetailInfo(alias:string): Observable<DetailInfo>{
    let url = "https://prof-srv.vietnamnet.vn/profile/getbyalias?alias="+alias;
    return this.http.get<DetailInfo>(url);
  }

}
