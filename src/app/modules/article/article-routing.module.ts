import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from 'src/app/modules/article/pages/article-list-page/article-list.component';
import { ArticleDetailComponent } from 'src/app/modules/article/pages/article-detail-page/article-detail.component';

import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

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
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
