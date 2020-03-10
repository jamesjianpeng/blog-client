import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  public getTags(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(
      `http://localhost:3070/api/v1/get/config/tags`
    );
  }
}
