import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class CrudService {
    constructor(private http: Http) { }

    // api/getAllLoc  ---> Gets all Location Details.  //

    // getAll() {
    //     return this.http.get('http://localhost:56134/api/Crud' );
    // }


    // api/AddLoc ---> Adds a new Location and posts details back. //

    getAll() {
        return this.http.get('http://localhost:56134/api/Crud',this.jwt()).map((response: Response) => response.json());
    }
    create(model:any) {
            return this.http.post('http://localhost:56134/api/Crud',model,this.jwt()).map((response: Response) => response.json());
        }
    // // api/EditLoc ---> Update the existing Location details. //

    update(model:any) {
        return this.http.put('http://localhost:56134/api/Crud', model, this.jwt()).map((response: Response) => response.json());
    }

    delete(id:any) {
        return this.http.delete('http://localhost:56134/api/Crud/'+id, this.jwt()).map((response: Response) => response.json());
    }


    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}