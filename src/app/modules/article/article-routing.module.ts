import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from 'src/app/modules/article/pages/article-list-page/article-list.component';
import { ArticleDetailComponent } from 'src/app/modules/article/pages/article-detail-page/article-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: ':_id',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
