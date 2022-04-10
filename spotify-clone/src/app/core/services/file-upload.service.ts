import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private baseAPI = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}
  filesUpload(files: FormData): Observable<any> {
    return this.httpClient.post(this.baseAPI + '/files/', files);
  }
}
