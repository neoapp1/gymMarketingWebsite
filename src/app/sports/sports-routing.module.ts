import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsDropdownComponent } from './components/sports-dropdown/sports-dropdown.component';
import { SportDetailComponent } from './components/sport-detail/sport-detail.component';

const routes: Routes = [
  { path: '', component: SportsDropdownComponent }, // Página principal con el dropdown
  { path: 'sports/:sportId', component: SportDetailComponent }, // Detalles dinámicos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsRoutingModule {}
