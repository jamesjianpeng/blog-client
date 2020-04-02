import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IArticle } from '@smartblog/models';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticles(
    data: any
  ): Observable<{ data: { data: IArticle[] }; total: number }> {
    return this.http.get<{ data: { data: IArticle[] }; total: number }>(
      `${environment.api}/api/v1/get/articles?tag=${data.tag}&page=1&pageSize=10&type=doing&keyword=&startDate=&endDate=`
    );
  }

  public getArticlesLine(
    data: any
  ): Observable<{ data: { data: IArticle[] }; total: number }> {
    return this.http.get<{ data: { data: IArticle[] }; total: number }>(
      `${environment.api}/api/v1/get/articlesLine?tag=${data.tag}&page=1&pageSize=1000&type=doing&keyword=&startDate=&endDate=`
    );
  }

  public getArticle(
    id: string
  ): Observable<{ data: IArticle }> {
    console.log(`${environment.api}/api/v1/get/article/${id}`);
    return this.http.get<{ data: IArticle }>(
      `${environment.api}/api/v1/get/article/${id}`
    );
  }
}
