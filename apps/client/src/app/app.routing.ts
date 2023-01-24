import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('@b2x/client/feature-register').then(
        (m) => m.ClientFeatureRegisterModule
      ),
  },
];
