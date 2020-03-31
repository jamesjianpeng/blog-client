import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from 'src/app/modules/article/pages/article-list-page/article-list.component';
import { MomentModule } from 'ngx-moment'; 
@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MomentModule
  ],
  declarations: [
    ArticleListComponent,
  ],

  providers: [
    ArticleService,
    ConfigService
  ]
})
export class ArticleModule {}
