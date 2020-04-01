import { 
  Component, 
  OnInit, 
  AfterContentChecked,
  ViewChild, 
  ElementRef, 
  AfterViewInit,
  AfterViewChecked  } from '@angular/core';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';
import { ITag, IArticle } from '@smartblog/models';
export interface IData {
  tag: any[];
}


@Component({
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.scss']
})
export class VersionListComponent implements OnInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor(
    private articleService: ArticleService,
    private configService: ConfigService
  ) {}

  public articles: IArticle[] = [];
  public tags: ITag[] = [];
  public data: any = { title: '11', content: 'ok' };
  public currentTag: ITag = {} as ITag;
  @ViewChild('line') line: ElementRef
  @ViewChild('versionBox') versionBox: ElementRef


  ngOnInit() {
    this.articleService.getArticles({
      tag: ''
    }).subscribe(({ data }) => {
        this.articles = data.data;
        console.log(data);
      }
    );
    this.configService.getTags().subscribe(({ data }) => {
        this.tags = data;
        this.currentTag = { text: 'all', value: '', createTime: '', updateTime: '', version: 1, history: []};
      }
    );
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
    this.resetHeight()
  }

  change(tag: ITag) {
    this.currentTag = tag;
    this.articleService.getArticles({
      tag: tag.value
    }).subscribe(({ data }) => {
      this.articles = data.data;
      console.log(data);
    });
  }
  
  ngAfterViewInit() {
  }

  resetHeight () {
    const el = this.line.nativeElement
    const box = this.versionBox.nativeElement
    const { height } = box.getBoundingClientRect()
    console.log(height)
    el.style= `height: ${height}px;`
    console.log(this.line.nativeElement)
  }
}
