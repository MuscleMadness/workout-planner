import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUserRequest, User } from '../models/gym';

@Injectable({
  providedIn: 'root',
})
export class GymManagementService {
  private apiUrl =
    'https://script.google.com/macros/s/AKfycby90HgmIZ5H2HvQ5eHLh8ya9jJkCHRRLNnmEKYj0OGyF5d0TVFFckJeyTLk-zP2MHGyCw/exec';
  // private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getGymInfo(gymId: string): Observable<any> {
    const url = `${this.apiUrl}?gymId=${gymId}&action=getGymInfo`;
    return this.http.get<any>(url);
  }

  getUserInfo(gymId: string | null, phoneNumber: string): Observable<any> {
    const url = `${this.apiUrl}?gymId=${gymId}&action=getUserInfo&phoneNumber=${phoneNumber}`;
    return this.http.get<any>(url);
  }

  getUserPermissions(gymId: string | null, email: string): Observable<any> {
    const url = `${this.apiUrl}?gymId=${gymId}&action=checkSheetAccess&email=${email}`;
    return this.http.get<any>(url);
  }

  registerUser(gymId: string | null, user: User): Observable<User> {
    if (!gymId) {
      return new Observable((observer) => {
        observer.error('gymId is required.');
        observer.complete();
      });
    }
    const request: RegisterUserRequest = {
      action: 'createUser',
      gymId: gymId,
      payload: user,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'text/plain;charset=utf-8',
    });

    const options = {
      headers: headers,
      responseType: 'json' as const,
      observe: 'body' as const,
    };

    console.log(JSON.stringify(request));

    return this.http.post<any>(this.apiUrl, request, options);
  }
}
