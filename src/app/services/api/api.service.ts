import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string = environment.apiUrl;

  // Define your API routes here
  APILIST: { [key: string]: { endpoint: string; method: 'get' | 'post' } } = {
    GET_TIMESERIES: { endpoint: 'api/data', method: 'get' },
    POST_TIMESERIES: { endpoint: 'api/data', method: 'post'}
  };

  constructor(private http: HttpClient) {}

  callapi(apiKey: string, params = {}, id = null, method = 'get'): Observable<any> {
    const api = this.APILIST[apiKey];
    const url = `${this.apiUrl}/${api.endpoint}`;
  
    // Include id in the URL if provided
    const apiUrl = id ? `${url}/${id}` : url;
  
    if (method === 'get') {
      const queryParams = new HttpParams({ fromObject: params });
      return this.http.get(apiUrl, { params: queryParams });
    } else if (method === 'post') {
      return this.http.post(apiUrl, params);
    } else if (method === 'put') {
      return this.http.put(apiUrl, params);
    } else if (method === 'delete') {
      // Note: DELETE method typically doesn't have a request body, so we omit the 'params' argument
      return this.http.delete(apiUrl);
    } else {
      throw new Error(`Invalid API method for ${apiKey}`);
    }
  }

}