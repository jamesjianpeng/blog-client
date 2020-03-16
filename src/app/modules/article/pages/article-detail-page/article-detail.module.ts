import { NgModule } from '@angular/core';
import { ArticleDetailComponent } from 'src/app/modules/article/pages/article-detail-page/article-detail.component';
import { ArticleDetailRoutingModule } from 'src/app/modules/article/pages/article-detail-page/article-detail-routing.module';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';


@NgModule({
  imports:      [
    ArticleDetailRoutingModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [ ArticleDetailComponent ],
})
export class ArticleDetailModule { }
