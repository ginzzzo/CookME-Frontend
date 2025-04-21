import { Observable } from "@shared/types/observable.type";

export interface IDelete<T> {
  delete(id: string): Observable<T>;
}