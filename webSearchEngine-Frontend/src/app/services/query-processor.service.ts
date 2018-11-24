import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryProcessorService {

  static readonly PROCESS_QUERY_URL = 'http://localhost:8080/ws/query/result';

  constructor(private http: HttpClient) {
  }

  processQueryRequest(query: string): Promise<any> {
    return this.http.get<any>(QueryProcessorService.PROCESS_QUERY_URL, {
        params:
          new HttpParams().set('query', query)
      }
    ).toPromise();
  }
}
