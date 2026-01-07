import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleModalComponent } from 'src/app/shared/components/schedule-modal/schedule-modal.component';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
  constructor(private dialog: MatDialog) {}
  openModal() {
    const dialogRef = this.dialog.open(ScheduleModalComponent, {
      width: '400px', // Ancho del modal
      // Puedes agregar más configuraciones aquí
    });
  }
}
