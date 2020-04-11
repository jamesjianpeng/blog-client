import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from 'src/app/modules/article/pages/article-list-page/article-list.component';
import { VersionListComponent } from 'src/app/modules/version/version-list-page/version-list.component'
// import { ArticleTimeLineComponent } from 'src/app/modules/article/pages/article-time-line-page/article-time-line.component'
import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: 'time-line',
    component: VersionListComponent
  },
  {
    path: ':id',
    loadChildren: () => import('src/app/modules/article/pages/article-detail-page/article-detail.module').then(m => m.ArticleDetailModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
