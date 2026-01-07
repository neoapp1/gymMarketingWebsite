import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactUsComponent, ContactFormComponent],
  imports: [CommonModule, ContactUsRoutingModule, FormsModule],
})
export class ContactUsModule {}
