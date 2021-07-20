import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'trang-chu', component:HomeComponent},
  {path: 'chinh-tri-gia', component:CategoryComponent},
  {path: 'van-dong-vien', component:CategoryComponent},
  {path: 'cau-lac-bo', component:CategoryComponent},
  {path: 'sao', component:CategoryComponent},
  {path: 'chi-tiet/:alias', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
