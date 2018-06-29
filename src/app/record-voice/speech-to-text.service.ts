import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SpeechToTextService {

  sttUrl='https://dev.liv.ai/liv_transcription_api/recordings/';

        constructor(private _http: HttpClient) {
            
        }
        
        postRequest(body):Observable<any>{
            let httpHeaders = new HttpHeaders({
                'Authorization':'Token 21edbf43a50382e01b9b3c40e07d6d09c2776b58',
                });      
            let options = {
                    headers: httpHeaders
            };      
            return this._http.post(this.sttUrl, body, options);   
        } 
}