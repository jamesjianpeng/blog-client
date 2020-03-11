import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from 'src/app/modules/article/pages/article-list-page/article-list.component';
import { ArticleDetailComponent } from 'src/app/modules/article/pages/article-detail-page/article-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ],

  providers: [
    ArticleService,
    ConfigService
  ]
})
export class ArticleModule {}
