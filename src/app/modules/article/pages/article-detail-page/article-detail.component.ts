import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';

@Component({
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  title = 'blog-article-home';
  articles: any[];
  tags: any[];

  constructor(
    private articleService: ArticleService,
    private configService: ConfigService
  ) {}

  ngOnInit() {

    this.articleService.getArticles({}).subscribe(
      data => {
        this.articles = data.data;
        console.log(this.articles);
      }
    );
    this.configService.getTags().subscribe(
      data => {
        this.tags = data.data;
        console.log(this.tags);
      }
    );
  }
}
