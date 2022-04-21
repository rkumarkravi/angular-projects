import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConsts } from '../configs/url-consts';
@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private httpClient: HttpClient) {}
  filesUpload(url:string,files: FormData): Observable<any> {
    return this.httpClient.post(urlConsts.baseurl+`upload/${url}`, files);
  }
}
