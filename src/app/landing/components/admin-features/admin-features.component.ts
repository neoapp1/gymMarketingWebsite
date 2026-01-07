import { Component } from '@angular/core';

interface Feature {
  id: string;
  name: string;
  imgSrc: string;
  icon: string;
}

@Component({
  selector: 'app-admin-features',
  templateUrl: './admin-features.component.html',
  styleUrls: ['./admin-features.component.css'],
})
export class AdminFeaturesComponent {
  features: Feature[] = [
    {
      id: 'checkin-checkout',
      name: 'Checkin/Check Out Flow',
      imgSrc: '../../../../assets/svg/admins/profiles.png',
      icon: 'fas fa-sign-in-alt', // Icono de FontAwesome
    },
    {
      id: 'membership-settings',
      name: 'Unlimited Membership Settings',
      imgSrc: '../../../../assets/svg/admins/memberships.png',
      icon: 'fas fa-cog', // Icono de FontAwesome
    },
    {
      id: 'data-migration',
      name: 'Easy Data Migration',
      imgSrc: '../../../../assets/svg/admins/data-web.png',
      icon: 'fas fa-database', // Icono de FontAwesome
    },
    {
      id: 'dashboard',
      name: 'Dashboard with Graph and Reports',
      imgSrc: '../../../../assets/svg/admins/dashboard-reports.png',
      icon: 'fas fa-chart-line', // Icono de FontAwesome
    },
    {
      id: 'modules',
      name: 'Various Modules Available',
      imgSrc: '../../../../assets/svg/admins/modules.png',
      icon: 'fas fa-box', // Icono de FontAwesome
    },
    {
      id: 'member-activities',
      name: 'Data on Members’ Activities',
      imgSrc: '../../../../assets/svg/admins/membersactivities.png',
      icon: 'fas fa-users', // Icono de FontAwesome
    },
    {
      id: 'classes',
      name: 'Setup Unlimited Classes',
      imgSrc: '../../../../assets/svg/admins/bookclasses.png',

      icon: 'fas fa-calendar-alt', // Icono de FontAwesome
    },
    {
      id: 'blast-notification',
      name: 'Blast Notification',
      imgSrc: '../../../../assets/svg/admins/notifications.png',
      icon: 'fas fa-bell', // Icono de FontAwesome
    },
    {
      id: 'financial-reports',
      name: 'Financial Reports',
      imgSrc: '../../../../assets/svg/admins/financial.png',
      icon: 'fas fa-file-invoice-dollar', // Icono de FontAwesome
    },
    {
      id: 'support',
      name: 'Tickets & WhatsApp Support',
      imgSrc: '../../../../assets/svg/admins/support.png',
      icon: 'fas fa-headset', // Icono de FontAwesome
    },
    {
      id: 'admins-trainers',
      name: 'Admins & Trainers Pages',
      imgSrc: '../../../../assets/svg/admins/adminandtrainers.png',
      icon: 'fas fa-user-shield', // Icono de FontAwesome
    },
  ];

  selectedFeature: string = this.features[0].id;

  constructor() {}

  ngOnInit(): void {}

  onFeatureHover(featureId: string) {
    this.selectedFeature = featureId;
  }
}
