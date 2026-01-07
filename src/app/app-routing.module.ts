import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./our-services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'sports', // Ruta padre para deportes
    loadChildren: () =>
      import('./sports/sports.module').then((m) => m.SportsModule), // Carga el módulo de deportes
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
