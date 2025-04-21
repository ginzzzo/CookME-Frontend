import { Injectable } from '@angular/core';
import { IAuthenticator } from '@shared/interfaces/login/ILogin.interface';
import { BaseService } from 'app/core/services/base-service.service';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService implements IAuthenticator {

  protected endpointPrefix = '/login'; // Configura el prefijo para este servicio

  login(email: string, password: string): Observable<string> {
    const body = { email, password };
    return this.post<string>(this.endpointPrefix, body).pipe(
      catchError((error) => {
        console.error('Error in LoginService:', error);
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }
}
