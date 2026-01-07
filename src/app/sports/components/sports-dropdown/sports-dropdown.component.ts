import { Component, HostListener, ElementRef } from '@angular/core';
import { SportsService } from '../../service/sports.service';

@Component({
  selector: 'app-sports-dropdown',
  templateUrl: './sports-dropdown.component.html',
  styleUrls: ['./sports-dropdown.component.css'],
})
export class SportsDropdownComponent {
  isOpen = false;
  sports: any[] = [];

  constructor(private sportsService: SportsService, private eRef: ElementRef) {}

  ngOnInit() {
    this.sports = this.sportsService.getSports();
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Detectar clics fuera del dropdown
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.isOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false; // Cerrar el dropdown si se hace clic fuera
    }
  }
}
