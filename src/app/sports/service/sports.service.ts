import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SportsService {
  private sports = [
    {
      name: 'Gym',
      route: 'gym',
      backgroundImage: '../../../assets/sports/gym.jpg',
      specifications: [
        { perk: 'Registration / Check-in-Checkout', icon: 'fas fa-dumbbell' }, // se mantiene igual
        {
          perk: 'Member’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        {
          perk: 'Trainer’s & admin’s section',
          icon: 'fas fa-chalkboard-teacher',
        },
        { perk: 'Membership section', icon: 'fas fa-users' },
        {
          perk: 'Group class including waiting list / One on one training feature.',
          icon: 'fas fa-calendar-alt',
        },
        { perk: 'Court schedules', icon: 'fas fa-clock' },
        { perk: 'Email notification', icon: 'fas fa-envelope' },
        { perk: 'Financial section', icon: 'fas fa-wallet' },
        { perk: 'Support section', icon: 'fas fa-headset' },
      ],
      icon: 'fas fa-dumbbell', // Icono principal de FontAwesome se mantiene igual
    },
    {
      name: 'Golf',
      route: 'golf',
      backgroundImage: '../../../assets/sports/golf.jpg',
      specifications: [
        { perk: 'Book tee times easily', icon: 'fas fa-golf-ball' },
        { perk: 'Track game statistics', icon: 'fas fa-chart-line' },
        { perk: 'Exclusive club discounts', icon: 'fas fa-tags' },
        {
          perk: 'Member’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        {
          perk: 'Trainer’s & admin’s section',
          icon: 'fas fa-chalkboard-teacher',
        },
        {
          perk: 'Group training including waiting list',
          icon: 'fas fa-calendar-alt',
        },
        { perk: 'Course schedules', icon: 'fas fa-clock' },
        {
          perk: 'Email notification for tee time confirmation',
          icon: 'fas fa-envelope',
        },
        { perk: 'Financial section for club fees', icon: 'fas fa-wallet' },
      ],

      icon: 'fas fa-golf-ball',
    },
    {
      name: 'Soccer',
      route: 'soccer',
      backgroundImage: '../../../assets/sports/soccer.jpg',
      specifications: [
        { perk: 'Join local leagues', icon: 'fas fa-futbol' },
        { perk: 'Track game performance', icon: 'fas fa-chart-bar' },
        { perk: 'Connect with other players', icon: 'fas fa-users' },
        {
          perk: 'Player’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        { perk: 'Coach & admin’s section', icon: 'fas fa-chalkboard-teacher' },
        { perk: 'Team management & waiting list', icon: 'fas fa-calendar-alt' },
        { perk: 'Field schedules', icon: 'fas fa-clock' },
        {
          perk: 'Match reminders and email notifications',
          icon: 'fas fa-envelope',
        },
        { perk: 'Financial section for team fees', icon: 'fas fa-wallet' },
      ],
      icon: 'fas fa-futbol',
    },
    {
      name: 'Tennis',
      route: 'tennis',
      backgroundImage: '../../../assets/sports/tennis.jpg',
      specifications: [
        { perk: 'Real-time match tracking', icon: 'fas fa-table-tennis' },
        { perk: 'Join tournaments', icon: 'fas fa-trophy' },
        { perk: 'Exclusive tips from coaches', icon: 'fas fa-lightbulb' },
        {
          perk: 'Player’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        {
          perk: 'Coach’s & admin’s section',
          icon: 'fas fa-chalkboard-teacher',
        },
        {
          perk: 'One on one training and waiting list',
          icon: 'fas fa-calendar-alt',
        },
        { perk: 'Court schedules', icon: 'fas fa-clock' },
        {
          perk: 'Email notifications for match results',
          icon: 'fas fa-envelope',
        },
        {
          perk: 'Financial section for tournament fees',
          icon: 'fas fa-wallet',
        },
      ],
      icon: 'fas fa-basketball',
    },
    {
      name: 'Swimming / Water Polo',
      route: 'swimming',
      backgroundImage: '../../../assets/sports/swimming.jpg',
      specifications: [
        { perk: 'Track swim sessions', icon: 'fas fa-person-swimming' },
        { perk: 'Join water polo teams', icon: 'fas fa-swimmer' },
        { perk: 'Access to pool schedules', icon: 'fas fa-calendar-alt' },
        {
          perk: 'Swimmer’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        { perk: 'Coach & admin’s section', icon: 'fas fa-chalkboard-teacher' },
        { perk: 'Group sessions with waiting list', icon: 'fas fa-users' },
        { perk: 'Reminders and email notifications', icon: 'fas fa-envelope' },
        { perk: 'Track competition results', icon: 'fas fa-trophy' },
        { perk: 'Financial section for event fees', icon: 'fas fa-wallet' },
      ],
      icon: 'fas fa-person-swimming',
    },
    {
      name: 'Boxing / Martial Arts',
      route: 'boxing',
      backgroundImage: '../../../assets/sports/box.jpg',
      specifications: [
        { perk: 'Track sparring sessions', icon: 'fas fa-fist-raised' },
        { perk: 'Access to training plans', icon: 'fas fa-file-alt' },
        { perk: 'Join local competitions', icon: 'fas fa-medal' },
        {
          perk: 'Athlete’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        {
          perk: 'Trainer’s & admin’s section',
          icon: 'fas fa-chalkboard-teacher',
        },
        {
          perk: 'Personal and group training with waiting list',
          icon: 'fas fa-users',
        },
        { perk: 'Class schedules', icon: 'fas fa-clock' },
        { perk: 'Notifications for upcoming fights', icon: 'fas fa-envelope' },
        { perk: 'Financial section for training fees', icon: 'fas fa-wallet' },
      ],
      icon: 'fas fa-fist-raised',
    },
    {
      name: 'Pilates Studio',
      route: 'pilates',
      backgroundImage: '../../../assets/sports/pilates.jpg',
      specifications: [
        { perk: 'Personalized classes', icon: 'fas fa-chalkboard-teacher' },
        { perk: 'Track class progress', icon: 'fas fa-chart-line' },
        { perk: 'Join group sessions', icon: 'fas fa-users' },
        {
          perk: 'Client’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        {
          perk: 'Instructor’s & admin’s section',
          icon: 'fas fa-chalkboard-teacher',
        },
        {
          perk: 'Class schedules and waiting list',
          icon: 'fas fa-calendar-alt',
        },
        {
          perk: 'Email reminders for upcoming sessions',
          icon: 'fas fa-envelope',
        },
        { perk: 'Financial section for membership', icon: 'fas fa-wallet' },
        { perk: 'Support section', icon: 'fas fa-headset' },
      ],
      icon: 'fas fa-person-walking',
    },
    {
      name: 'Sailing',
      route: 'sailing',
      backgroundImage: '../../../assets/sports/sail.jpg',
      specifications: [
        { perk: 'Track sailing sessions', icon: 'fas fa-anchor' },
        { perk: 'Book rental services', icon: 'fas fa-ship' },
        { perk: 'Access to weather alerts', icon: 'fas fa-cloud-sun' },
        {
          perk: 'Sailor’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        {
          perk: 'Instructor & admin’s section',
          icon: 'fas fa-chalkboard-teacher',
        },
        {
          perk: 'Schedule and waiting list for boat rentals',
          icon: 'fas fa-calendar-alt',
        },
        { perk: 'Notifications for weather updates', icon: 'fas fa-envelope' },
        { perk: 'Financial section for rentals', icon: 'fas fa-wallet' },
        {
          perk: 'Support section',
          icon: 'fas fa-headset',
        },
      ],
      icon: 'fas fa-sailboat',
    },
    {
      name: 'Diving',
      route: 'diving',
      backgroundImage: '../../../assets/sports/diving.jpg',
      specifications: [
        { perk: 'Track dive locations', icon: 'fas fa-fish' },
        { perk: 'Book guided dives', icon: 'fas fa-water' },
        { perk: 'Access dive certifications', icon: 'fas fa-certificate' },
        {
          perk: 'Diver’s profile on your admin dashboard',
          icon: 'fas fa-id-card',
        },
        {
          perk: 'Instructor’s & admin’s section',
          icon: 'fas fa-chalkboard-teacher',
        },
        { perk: 'Dive schedule and waiting list', icon: 'fas fa-calendar-alt' },
        {
          perk: 'Email notifications for dive conditions',
          icon: 'fas fa-envelope',
        },
        { perk: 'Financial section for dive packages', icon: 'fas fa-wallet' },
        {
          perk: 'Support section ',
          icon: 'fas fa-headset',
        },
      ],
      icon: 'fas fa-fish',
    },
    {
      name: 'Dance Studio',
      route: 'dance',
      backgroundImage: '../../../assets/sports/dance.jpg',
      specifications: [
        { perk: 'Track dance routines', icon: 'fas fa-music' },
        { perk: 'Join dance classes', icon: 'fas fa-person' },
        { perk: 'Compete in events', icon: 'fas fa-star' },
        {
          perk: 'Dancer’s profile on your members section',
          icon: 'fas fa-id-card',
        },
        {
          perk: 'Instructor’s & admin’s section',
          icon: 'fas fa-chalkboard-teacher',
        },
        {
          perk: 'Class schedules and waiting list',
          icon: 'fas fa-calendar-alt',
        },
        {
          perk: 'Email reminders for upcoming classes',
          icon: 'fas fa-envelope',
        },
        {
          perk: 'Financial section for competition fees',
          icon: 'fas fa-wallet',
        },
        { perk: 'Support section', icon: 'fas fa-users' },
      ],
      icon: 'fas fa-person',
    },
  ];

  constructor() {}

  getSports() {
    return this.sports;
  }
}
