import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment, RegisterUserRequest, User } from '../models/gym';

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

  getAllUsers(gymId: string | null): Observable<any> {
    const authResultJson = localStorage.getItem('authResult');
    if (!authResultJson) {
      return new Observable((observer) => {
        observer.error({ status: 401, message: 'User not logged in.' });
        observer.complete();
      });
    }
    
    try {
      const authResult = JSON.parse(authResultJson);
      // Check if we have the token in the expected structure or use idToken as fallback
      const token = authResult?.accessToken?.token || authResult?.idToken || '';
      
      if (!token) {
        console.error('No authentication token found in stored credentials');
        return new Observable((observer) => {
          observer.error({ status: 401, message: 'No valid authentication token found.' });
          observer.complete();
        });
      }
      
      const url = `${this.apiUrl}?gymId=${gymId}&action=getAllUsers&Authorization=Bearer ${token}`;
      return this.http.get<any>(url);
    } catch (error) {
      console.error('Error parsing authentication data:', error);
      return new Observable((observer) => {
        observer.error({ status: 401, message: 'Invalid authentication data.' });
        observer.complete();
      });
    }
  }

  getUserPermissions(gymId: string | null, email: string): Observable<any> {
    const url = `${this.apiUrl}?gymId=${gymId}&action=checkSheetAccess&email=${email}`;
    return this.http.get<any>(url);
  }

  updateUser(gymId: string | null, user: User): Observable<User> {
    if (!gymId) {
      return new Observable((observer) => {
        observer.error('gymId is required.');
        observer.complete();
      });
    }

    const request: RegisterUserRequest = {
      action: 'updateUser',
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

  logPayment(gymId: string | null, payment: Payment): Observable<any> {
    if (!gymId) {
      return new Observable((observer) => {
        observer.error('gymId is required.');
        observer.complete();
      });
    }
    const authResultJson = localStorage.getItem('authResult');
    const authResult = JSON.parse(authResultJson || '{}');
    if (!authResult) {
      return new Observable((observer) => {
        observer.error('User not logged in.');
        observer.complete();
      });
    } else {
      const authorization = 'Bearer ' + authResult.accessToken.token;
      payment.transactionId = authResult.profile.givenName
      const request = {
        action: 'addPayment',
        gymId: gymId,
        payload: payment,
        authorization: authorization,
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

  updateUserExpiry(gymId: string | null, userId: string, expiryDate: string): Observable<any> {
    if (!gymId) {
      return new Observable((observer) => {
        observer.error('gymId is required.');
        observer.complete();
      });
    }

    const authResultJson = localStorage.getItem('authResult');
    if (!authResultJson) {
      return new Observable((observer) => {
        observer.error({ status: 401, message: 'User not logged in.' });
        observer.complete();
      });
    }
    
    try {
      const authResult = JSON.parse(authResultJson);
      const token = authResult?.accessToken?.token || authResult?.idToken || '';
      
      if (!token) {
        console.error('No authentication token found in stored credentials');
        return new Observable((observer) => {
          observer.error({ status: 401, message: 'No valid authentication token found.' });
          observer.complete();
        });
      }
      
      const request = {
        action: 'updateUserExpiry',
        gymId: gymId,
        userId: userId,
        expiryDate: expiryDate,
        authorization: 'Bearer ' + token
      };

      const headers = new HttpHeaders({
        'Content-Type': 'text/plain;charset=utf-8',
      });

      const options = {
        headers: headers,
        responseType: 'json' as const,
        observe: 'body' as const,
      };

      console.log('Renewing membership:', request);

      return this.http.post<any>(this.apiUrl, request, options);
    } catch (error) {
      console.error('Error parsing authentication data:', error);
      return new Observable((observer) => {
        observer.error({ status: 401, message: 'Invalid authentication data.' });
        observer.complete();
      });
    }
  }
}
