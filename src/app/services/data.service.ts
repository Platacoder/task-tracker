import { Injectable } from '@angular/core';
import { Users } from '../types/users';
import { HttpClient } from '@angular/common/http'
import {
  Observable,
  map,
  pipe, switchMap
} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getExistingUsersData$(): Observable<Users[]> {
    return this._http.get<Users[]>('localhost:4200/getUsers').pipe(
      map((data: Users[]) => {
        return data
      })
    );
  }
}
