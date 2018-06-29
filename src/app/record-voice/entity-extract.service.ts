import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntityExtractService {

  entityExtractURL='https://dev.liv.ai/nlpapis/text/';
  constructor(private _http: HttpClient) { }

  extractEntity(body):Observable<any>{
    let httpHeaders = new HttpHeaders({
        'Authorization':'Token 494f50241dce62ec2f9b8825f1b10208cbf164a5',
        });      
    let options = {
            headers: httpHeaders
    };      
    return this._http.post(this.entityExtractURL, body, options);  

  }

}