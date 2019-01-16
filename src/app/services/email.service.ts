import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { EmailServiceInterface } from './email.service-interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService implements EmailServiceInterface {
  private service_id: String = 'boda';
  private template_id: String  = 'boda';
  private user_id: String  = 'user_PMJajmYRpcKBU5KOuFNh8';

  public send(name: String, email: String, message: String, date: Date): void {
    const templateParams = {
        name: name,
        email: email,
        message: message,
        date: date.toLocaleString('es-ES'),
    };

    emailjs.send(this.service_id.toString(), this.template_id.toString(), templateParams,  this.user_id.toString());
  }
}
