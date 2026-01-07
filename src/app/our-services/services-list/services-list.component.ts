import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleModalComponent } from 'src/app/shared/components/schedule-modal/schedule-modal.component';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
})
export class ServicesListComponent {
  services = [
    {
      category: 'Custom Software Solutions',
      items: [
        {
          name: 'App Development',
          description:
            'Tailored app development services for mobile and web applications that ensure seamless user experiences.',
          benefits: [
            'Custom-designed to match your brand and workflow.',
            'Full support from concept to deployment and maintenance.',
            'Cutting-edge technologies for optimal performance and scalability.',
          ],
          icon: 'fas fa-mobile-alt',
        },
        {
          name: 'Website Design & Development',
          description:
            'Comprehensive website packages with creative design and robust development, optimized for performance and aesthetics.',
          benefits: [
            'Modern, responsive design tailored to your brand.',
            'SEO-optimized to improve visibility.',
            'Secure and reliable development for optimal performance.',
          ],
          icon: 'fas fa-paint-brush',
        },
      ],
    },
    {
      category: 'Digital Infrastructure Services',
      items: [
        {
          name: 'Web Hosting',
          description:
            'Reliable and scalable hosting solutions ensuring maximum uptime, fast load times, and 24/7 support for all business sizes.',
          benefits: [
            'High uptime guarantee and quick loading speeds.',
            'Fully managed with security and updates handled by our team.',
            'Scalable solutions that grow with your business.',
          ],
          icon: 'fas fa-globe',
        },
        {
          name: 'Website Package',
          description:
            'All-in-one packages combining design, development, and hosting for small to medium businesses.',
          benefits: [
            'One-stop solution for everything from design to deployment.',
            'Flexible pricing models for various business sizes.',
            'Continuous support post-launch.',
          ],
          icon: 'fas fa-box',
        },
      ],
    },
    {
      category: 'Premium Services & Subscription Models',
      items: [
        {
          name: 'Premium Subscription',
          description:
            'Flexible subscription model providing access to premium features and advanced functionalities across our applications.',
          benefits: [
            'Exclusive access to advanced tools and features.',
            'Priority support and updates.',
            'Flexible monthly or yearly payment plans.',
          ],
          icon: 'fas fa-star',
        },
      ],
    },
    {
      category: 'Operational Efficiency Services',
      items: [
        {
          name: 'Leasing Solutions',
          description:
            'Flexible leasing options for software services, enabling access to premium solutions without significant upfront costs.',
          benefits: [
            'Access to premium services without capital investment.',
            'Flexibility to scale up or down based on business needs.',
            'No need for long-term contracts—flexible leasing terms available.',
          ],
          icon: 'fas fa-file-invoice-dollar',
        },
      ],
    },
  ];
  constructor(private dialog: MatDialog) {}
  openModal() {
    const dialogRef = this.dialog.open(ScheduleModalComponent, {
      width: '400px', // Ancho del modal
      // Puedes agregar más configuraciones aquí
    });
  }
}
