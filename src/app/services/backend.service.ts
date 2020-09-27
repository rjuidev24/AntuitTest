import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  /**
   * Get data from specified endpoint URL.
   * @param url URL to the API Endpoint
   * @param options Optional options to make a request
   */
  public get(url: string, options?: unknown): Observable<unknown> {
    return this.http.get(url, options);
  }
}

