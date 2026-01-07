import { Component } from '@angular/core';
import { ScheduleModalComponent } from '../shared/components/schedule-modal/schedule-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  constructor(private dialog: MatDialog) {}
  firstEmail: string = 'info@neo-app.eu';
  formData = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent default form submission

    const subject = encodeURIComponent('Contact Us: ' + this.formData.name);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nMessage: ${this.formData.message}`
    );
    const mailtoLink = `mailto:info@neo-app.eu?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; // Redirect to mailto link

    // Optionally, reset the form
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
