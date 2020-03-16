import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from 'src/app/modules/article/pages/article-list-page/article-list.component';

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
