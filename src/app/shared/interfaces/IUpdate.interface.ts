import { Observable } from "@shared/types/observable.type";

export interface IUpdate<T> {
    update(id: string, item: T): Observable<T>;
}