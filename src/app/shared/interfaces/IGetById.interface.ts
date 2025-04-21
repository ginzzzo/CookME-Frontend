import { Observable } from "@shared/types/observable.type";

export interface IGetById<T> {
    getById(id: string): Observable<T>;
}