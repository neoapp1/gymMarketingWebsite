import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SportsModule } from '../sports/sports.module';
import { ScheduleModalComponent } from './components/schedule-modal/schedule-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ScheduleModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    SportsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent, // Exporta estos componentes para que puedan ser usados
    ScheduleModalComponent,
  ],
})
export class SharedModule {}
