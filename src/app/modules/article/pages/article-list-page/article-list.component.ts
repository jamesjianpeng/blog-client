import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';
export interface IData {
  tag: any[];
}


@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private configService: ConfigService
  ) {}

  public articles: { text }[] = [ { text: '11'} ];
  public tags: { text: string }[] = [ { text: '11'} ];
  public data: any = { title: '11', content: 'ok' }


  ngOnInit() {
    this.articleService.getArticles({}).subscribe(({ data }) => {
        this.articles = data;
        console.log(this.articles);
      }
    );
    this.configService.getTags().subscribe(({ data }) => {
        this.tags = data;
        console.log(this.tags);
        console.log(this.tags.length);
      }
    );
  }
}
