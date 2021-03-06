import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

    constructor(
        private http: Http
    ) {
        // 
    }

    public get( url ): Observable<any> {
        return this.http.get( url )
            .map((res: Response) => res.json())
            .catch((error: any) =>
                Observable.throw(error.json().error || 'Server error')
            );
    }
}
