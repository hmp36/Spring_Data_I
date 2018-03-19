import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../../models/user.model';
import '../../shared/app.vendor';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
    // TODO: make api routes config depend on NODE_ENV
    private baseUrl = environment.apiUrl + 'users';

    constructor(
        private _http: Http
    ) {}

    public getAllUsers(): Promise<User[]> {
        return this._http.get(this.baseUrl)
            .toPromise()
            .then((response) => {
                const body = response.json().data;
                const users: User[] = [];
                for (const item of body) {
                    users.push( new User(
                        item._id,
                        item.role,
                        item.name_first,
                        item.name_last,
                        item.age,
                        item.skill
                    ));
                }
                return Promise.resolve(users);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            })
    }

    public getOneUser(id: string): Promise<User> {
        return this._http.get(this.baseUrl + '/' + id)
            .toPromise()
            .then((response) => {
                const body = response.json().data;
                const user = new User(
                    body._id,
                    body.role,
                    body.name_first,
                    body.name_last,
                    body.age,
                    body.skill
                );
                return Promise.resolve(user);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            })
    }

    public addUser(data: User) {
        return this._http.post(this.baseUrl, data)
            .toPromise()
            .then((response) => {
                const body = response.json().data;
                const user = new User(
                    body._id,
                    body.role,
                    body.name_first,
                    body.name_last,
                    body.age,
                    body.skill
                );
                console.log(user);
                return Promise.resolve(user);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            })
    }

    public updateUser(data: User, id: string) {
        return this._http.put(this.baseUrl + '/' + id, data)
            .toPromise()
            .then((response) => {
                const body = response.json().data;
                const user = new User(
                    body._id,
                    body.role,
                    body.name_first,
                    body.name_last,
                    body.age,
                    body.skill
                );
                return Promise.resolve(user);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            })
    }

    public deleteUser(id: string) {
        return this._http.delete(this.baseUrl + '/' + id)
            .toPromise()
            .then((response) => {
                const body = response.json().data;
                const user = new User(
                    body._id,
                    body.role,
                    body.name_first,
                    body.name_last,
                    body.age,
                    body.skill
                );
                return Promise.resolve(user);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            })
    }
}