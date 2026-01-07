import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CompaniesWithUsComponent } from './components/companies-with-us/companies-with-us.component';
import { AdminFeaturesComponent } from './components/admin-features/admin-features.component';
import { MemberFeaturesComponent } from './components/member-features/member-features.component';
import { PerksComponent } from './components/perks/perks.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LandingComponent,
    LandingPageComponent,
    HeroSectionComponent,
    CompaniesWithUsComponent,
    AdminFeaturesComponent,
    MemberFeaturesComponent,
    PerksComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, MatDialogModule],
})
export class LandingModule {}
