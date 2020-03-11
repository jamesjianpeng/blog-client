import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticles(
    data: any
  ): Observable<{ data: any[]; total: number }> {
    return this.http.get<{ data: any[]; total: number }>(
      `${environment.api}/api/v1/get/articles`,
      {
        params: { data }
      }
    );
  }
}
