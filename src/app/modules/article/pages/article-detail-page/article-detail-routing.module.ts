import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from 'src/app/modules/article/pages/article-detail-page/article-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArticleDetailRoutingModule {}
