import {  Injectable } from "@angular/core";
import {  Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { User } from "../models/user";

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    /**
     *  Get all users
     */
    getUsers(): Observable<User[]> {
        return this.http.get("http://reqres.in/api/users")
            .map(res => res.json().data)
            // .catch(this.handleError);
    }

    /** 
     * Get a singlel user
     */
    getUser() {
        return this.http.get("")
            .map(res => res.json())
            .catch(this.handleError);
    }

    /**
     * Handle errors
     */
    private handleError(err) {
        let errMsg:  string;

        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body || JSON.stringify(body);
            errMsg = `${err.status} - ${err.statusText} || ''}  ${error}`
        } else {
            errMsg = err.message ? err.message : err.toString();
        }

        return  Observable.throw(errMsg);
    }

}

