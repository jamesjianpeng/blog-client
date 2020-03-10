import { ModuleWithProviders, NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from 'src/app/modules/article/pages/article-list-page/article-list.component';
import { ArticleDetailComponent } from 'src/app/modules/article/pages/article-detail-page/article-detail.component';

@NgModule({
  imports: [
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
