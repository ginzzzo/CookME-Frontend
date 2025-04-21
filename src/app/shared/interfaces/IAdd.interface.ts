import { Observable } from "@shared/types/observable.type";

export interface IAdd<T> {
    add(item: T): Observable<T>;
}