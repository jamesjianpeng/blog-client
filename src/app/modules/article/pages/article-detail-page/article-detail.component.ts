import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '@smartblog/models';
@Component({
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  title = 'blog-article-home';
  article: IArticle;
  tags: any[];

  constructor(
    private articleService: ArticleService,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.getArticle(id).subscribe(
      data => {
        this.article = data.data;
      }
    );
  }
}
