import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { EmailServiceInterface } from './email.service-interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService implements EmailServiceInterface {
  private serviceId: String = 'boda';
  private contactoTemplateId: String  = 'boda_contacto';
  private confirmacionTemplateId: String  = 'boda_confirmacion';
  private userId: String  = 'user_PMJajmYRpcKBU5KOuFNh8';

  public sendContacto(name: String, email: String, message: String, date: Date): void {
    const templateParams = {
        name: name,
        email: email,
        message: message,
        date: date.toLocaleString('es-ES'),
    };

    emailjs.send(this.serviceId.toString(), this.contactoTemplateId.toString(), templateParams,  this.userId.toString());
  }

  public sendConfirmacion(name: String, email: String, message: String, date: Date): void {
    const templateParams = {
        name: name,
        email: email,
        message: message,
        date: date.toLocaleString('es-ES'),
    };

    emailjs.send(this.serviceId.toString(), this.confirmacionTemplateId.toString(), templateParams,  this.userId.toString());
  }
}
