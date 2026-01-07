import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['./schedule-modal.component.css'],
})
export class ScheduleModalComponent implements OnInit {
  scheduleForm: FormGroup;
  services = [
    { name: 'App Development' },
    { name: 'Website Design & Development' },
    { name: 'Web Hosting' },
    { name: 'Website Package' },
    { name: 'Premium Subscription' },
    { name: 'Leasing Solutions' },
  ];
  sports = [
    { name: 'Gym' },
    { name: 'Golf' },
    { name: 'Soccer' },
    { name: 'Tennis' },
    { name: 'Swimming / Water Polo' },
    { name: 'Boxing / Martial Arts' },
    { name: 'Pilates Studio' },
    { name: 'Sailing' },
    { name: 'Diving' },
    { name: 'Dance Studio' },
  ];
  selectedService: string | null = null;
  selectedSport: string | null = null;
  isServiceSelected: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ScheduleModalComponent>
  ) {
    this.scheduleForm = this.fb.group({
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      telephoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ], // Validación de números
      emailAddress: ['', [Validators.required, Validators.email]], // Validación de correo
      serviceOrSport: ['sport', Validators.required],
      selectedService: [''], // Para almacenar el servicio seleccionado
      selectedSport: [''], // Para almacenar el deporte seleccionado
      additionalInfo: [''], // Campo opcional para información adicional
    });
  }

  ngOnInit(): void {}

  onServiceToggle() {
    this.isServiceSelected = true; // Toggle a servicio
    this.selectedSport = null; // Resetear deporte
    this.scheduleForm.get('selectedSport')?.setValue(''); // Limpiar valor del deporte
  }

  onSportToggle() {
    this.isServiceSelected = false; // Toggle a deporte
    this.selectedService = null; // Resetear servicio
    this.scheduleForm.get('selectedService')?.setValue(''); // Limpiar valor del servicio
  }

  onSubmit() {
    if (this.scheduleForm.valid) {
      const formValue = this.scheduleForm.value;

      // Construir el cuerpo del correo electrónico
      const emailBody = `
        Name: ${formValue.name}
        Company Name: ${formValue.companyName}
        Telephone Number: ${formValue.telephoneNumber}
        Email Address: ${formValue.emailAddress}
        Service or Sport: ${formValue.serviceOrSport}
        Selected Service: ${formValue.selectedService || 'N/A'}
        Selected Sport: ${formValue.selectedSport || 'N/A'}
        Additional Info: ${formValue.additionalInfo || 'N/A'}
      `;

      // Crear el enlace mailto con el destinatario fijo
      const mailtoLink = `mailto:info@neo-app.eu?subject=Service/Sport Inquiry&body=${encodeURIComponent(
        emailBody
      )}`;

      // Abrir la aplicación de correo
      window.location.href = mailtoLink;
    } else {
      console.log('Form is invalid');
    }
  }

  close() {
    this.dialogRef.close();
    // Aquí puedes cerrar el modal usando el servicio o emitirte un evento
  }
}
