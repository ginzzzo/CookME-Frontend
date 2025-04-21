import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FlowbiteService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadFlowbite(callback: (flowbite: FlowbiteService) => void): void {
    this.document.documentElement.classList.add('dark');
    callback(this);
  }
}