import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from '../../service/sports.service';
import { ScheduleModalComponent } from 'src/app/shared/components/schedule-modal/schedule-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css'],
})
export class SportDetailComponent implements OnInit {
  sportId: string | null = null;
  sport: any; // Cambia el tipo según tu modelo si lo tienes

  constructor(
    private route: ActivatedRoute,
    private sportsService: SportsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.sportId = params.get('sportId');
      if (this.sportId) {
        this.fetchSportDetails(this.sportId);
      }
    });
  }

  fetchSportDetails(sportId: string): void {
    // Encuentra el deporte por su ruta
    this.sport = this.sportsService
      .getSports()
      .find((sport) => sport.route === sportId);
  }

  openModal() {
    const dialogRef = this.dialog.open(ScheduleModalComponent, {
      width: '400px', // Ancho del modal
      // Puedes agregar más configuraciones aquí
    });
  }
}
