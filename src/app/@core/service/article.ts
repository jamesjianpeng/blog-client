import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticles(
    data: any
  ): Observable<{ data: any[]; total: number }> {
    return this.http.get<{ data: any[]; total: number }>(
      `http://localhost:3070/api/v1/get/articles`,
      {
        params: { data }
      }
    );
  }
}
