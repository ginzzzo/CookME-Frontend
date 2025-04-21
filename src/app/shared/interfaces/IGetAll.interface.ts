import { Observable } from "@shared/types/observable.type";

export interface IGetAll<T> {
    getAll(): Observable<T[]>;
}