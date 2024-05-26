import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../app.constants';
import { ResponseWrapper, User } from 'src/app/types/users';
import { catchError, map, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SalicService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<ResponseWrapper<User[]>>(Endpoints.USERS);
  }
  getPhoto(email: string) {
    return this.http
      .get<string>(Endpoints.PHOTO(email))
      .pipe(map((photo: string) => `data:image/png;base64,${photo}`));
  }
}
