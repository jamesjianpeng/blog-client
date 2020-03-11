import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod'
import { ITag } from '@smartblog/models'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  public getTags(): Observable<{ data: ITag[] }> {
    return this.http.get<{ data: ITag[] }>(
      `${environment.api}/api/v1/get/config/tags`
    );
  }
}
