import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleModalComponent } from 'src/app/shared/components/schedule-modal/schedule-modal.component';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.css'],
})
export class PerksComponent {
  constructor(private dialog: MatDialog) {}
  openModal() {
    const dialogRef = this.dialog.open(ScheduleModalComponent, {
      width: '400px', // Ancho del modal
      // Puedes agregar más configuraciones aquí
    });
  }
}
