import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarOpen = false;

  constructor(private eRef: ElementRef) {}

  // Método para abrir/cerrar el menú
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Detectar clics fuera del menú
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.isNavbarOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isNavbarOpen = false; // Cerrar el menú si se hace clic fuera
    }
  }
}
