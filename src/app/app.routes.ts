import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/landing-page/landing-page.routes').then(
        (m) => m.landingPageRoutes
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/login/container/login-container.component').then(
        (m) => m.LoginContainerComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];