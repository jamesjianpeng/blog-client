import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';
import { ITag, IArticle } from '@smartblog/models';
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

  public articles: IArticle[] = [];
  public tags: ITag[] = [];
  public data: any = { title: '11', content: 'ok' };
  public currentTag: ITag = {} as ITag;


  ngOnInit() {
    this.articleService.getArticles({
      tag: ''
    }).subscribe(({ data }) => {
        this.articles = data.data;
      }
    );
    this.configService.getTags().subscribe(({ data }) => {
        this.tags = data;
        this.currentTag = { text: 'all', value: '', createTime: '', updateTime: '', version: 1, history: []};
      }
    );
  }

  change(tag: ITag) {
    this.currentTag = tag;
    this.articleService.getArticles({
      tag: tag.value
    }).subscribe(({ data }) => {
      this.articles = data.data;
      console.log(data);
    }
  );
  }
}
