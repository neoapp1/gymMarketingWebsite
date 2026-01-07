import { Component } from '@angular/core';

interface Feature {
  id: string;
  name: string;
  imgSrc: string;
  icon: string;
}

@Component({
  selector: 'app-member-features',
  templateUrl: './member-features.component.html',
  styleUrls: ['./member-features.component.css'],
})
export class MemberFeaturesComponent {
  features: Feature[] = [
    {
      id: 'checkin-checkout',
      name: 'Profiles with personalised QR code for Check-In & Check-Out',
      imgSrc: '../../../../assets/svg/members/checkin.png',
      icon: 'fas fa-qrcode', // Icono de FontAwesome para código QR
    },
    // {
    //   id: 'personal-information',
    //   name: 'Personal Information',
    //   imgSrc: '../../../../assets/svg/members/profileinfo.png', // Cambia la ruta según sea necesario
    //   icon: 'fas fa-user', // Icono de FontAwesome para información personal
    // },
    {
      id: 'booking',
      name: 'Check live availability and book your classes & court',
      imgSrc: '../../../../assets/svg/members/book-class.png', // Cambia la ruta según sea necesario
      icon: 'fas fa-calendar-check', // Icono de FontAwesome para reservas
    },
    {
      id: 'membership-renewal',
      name: 'Check & Renew your membership plan',
      imgSrc: '../../../../assets/svg/members/pay.png', // Cambia la ruta según sea necesario
      icon: 'fas fa-redo', // Icono de FontAwesome para renovación
    },
    {
      id: 'e-store',
      name: 'E-Store with various customised garments',
      imgSrc: '../../../../assets/svg/members/estore.png', // Cambia la ruta según sea necesario
      icon: 'fas fa-shopping-cart', // Icono de FontAwesome para e-store
    },
  ];

  selectedFeature: any = this.features[0].id;

  constructor() {}

  ngOnInit(): void {}

  onFeatureHover(featureId: string | null) {
    this.selectedFeature = featureId;
  }
}
