import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import { ArticleDetailComponent } from './article-detail.component';

@NgModule({
  imports:      [
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [ ArticleDetailComponent ],
})
export class ArticleDetailModule { }
