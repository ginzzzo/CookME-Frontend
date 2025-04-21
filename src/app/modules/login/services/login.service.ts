import { Injectable } from '@angular/core';
import { IAuthenticator } from '@shared/interfaces/login/ILogin.interface';
import { BaseService } from 'app/core/services/base-service.service';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginUserDTO } from '../dtos/login.dto';
import { TokenDTO } from '@shared/dtos/auth/token.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService
  extends BaseService
  implements IAuthenticator<TokenDTO>
{
  protected endpoint = '/login';

  login(email: string, password: string): Observable<TokenDTO> {
    const loginUserDTO: LoginUserDTO = {
      email: email,
      password: password,
    };

    return this.post<TokenDTO>(this.endpoint, loginUserDTO).pipe(
      catchError((error) => {
        console.error('Error in LoginService:', error);
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }
}
