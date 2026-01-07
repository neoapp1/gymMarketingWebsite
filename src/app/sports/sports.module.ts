import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsDropdownComponent } from './components/sports-dropdown/sports-dropdown.component';
import { SportDetailComponent } from './components/sport-detail/sport-detail.component';
import { RouterModule } from '@angular/router';
import { SportCardComponent } from './components/sports-dropdown/sport-card/sport-card.component';

@NgModule({
  declarations: [
    SportsDropdownComponent,
    SportDetailComponent,
    SportCardComponent,
  ],
  imports: [RouterModule, CommonModule, SportsRoutingModule],
  exports: [
    SportsDropdownComponent, // Si lo necesitas en otros módulos, lo exportas aquí
  ],
})
export class SportsModule {}
