import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private baseUrl: string = environment.baseUrl;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public title: Title,
    public meta: Meta
  ) {}

  setCanonicalURL(path: string = '') {
    const canURL = `${this.baseUrl}${path}`;
    const head = this._document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this._document.querySelector(
      'link[rel="canonical"]'
    );

    if (!element) {
      element = this._document.createElement('link');
      head.appendChild(element);
    }

    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', canURL);
  }

  setIndexFollow(state: boolean = true) {
    this.meta.updateTag({
      name: 'robots',
      content: state ? 'index, follow' : 'noindex, nofollow',
    });
  }

  updateMetaTag(name: string, content: string) {
    this.meta.updateTag({ name, content });
  }

  setDefaultTags(title: string, description: string, path: string = '') {
    this.title.setTitle(title);
    this.updateMetaTag('description', description);
    this.setCanonicalURL(path);
    this.setIndexFollow(true);
  }
}