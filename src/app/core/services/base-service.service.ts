import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(protected http: HttpClient) {}

  protected get apiUrl(): string {
    return environment.apiUrl;
  }

  protected get<T>(url: string, options?: object): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}${url}`, options)
      .pipe(catchError(this.handleError));
  }

  protected post<T>(url: string, body: any, options?: object): Observable<T> {
    return this.http
      .post<T>(`${this.apiUrl}${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  protected put<T>(url: string, body: any, options?: object): Observable<T> {
    return this.http
      .put<T>(`${this.apiUrl}${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  protected delete<T>(url: string, options?: object): Observable<T> {
    return this.http
      .delete<T>(`${this.apiUrl}${url}`, options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
