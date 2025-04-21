import { Observable } from "@shared/types/observable.type";

export interface IAuthenticator {
    login(email: string, password: string): Observable<string>;
}
