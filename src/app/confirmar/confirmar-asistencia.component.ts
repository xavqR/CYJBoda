import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Invitado } from 'src/domain/invitado';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirmar-asistencia.component.html',
  styleUrls: ['./confirmar-asistencia.component.scss']
})

export class ConfirmarAsistenciaComponent implements OnInit {
  public formConfirmar: FormGroup;
  public submittedConfirmar: Boolean = false;
  public formInvitado: FormGroup;
  public submittedAddInvitado: Boolean = false;
  public invitados: Invitado[] = [];

  private _hasAlojamiento: Boolean;
  public get hasAlojamiento(): Boolean {
    return this._hasAlojamiento;
  }
  public set hasAlojamiento(value: Boolean) {
    this._hasAlojamiento = value;
    if (this._hasAlojamiento) {
      this.formInvitado.controls.dni.enable();
      this.formInvitado.controls.fechaNacimiento.enable();
    }
    else {
      this.formInvitado.controls.dni.disable();
      this.formInvitado.controls.fechaNacimiento.disable();
    }
  }

  @ViewChild('basicModal') basicModal;

  constructor(private formBuilder: FormBuilder, private angularFirestore: AngularFirestore, private emailService: EmailService) { }

  public ngOnInit() {
    this.createForms();
  }

  private createForms(): void {
    this.formConfirmar = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });

    this.formInvitado = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.pattern('([a-zA-ZñáéíóúÁÉÍÓÚ]{2,20})+ ([a-zA-ZñáéíóúÁÉÍÓÚ]{2,20})+ (([a-zA-ZñáéíóúÁÉÍÓÚ]{2,20})|([a-zA-Zñ]{2,20})+ ([a-zA-Zñ]{2,20}))')]],
      alergias: [''],
      hasAlojamiento: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('([0-9]{8,8})+[A-Za-z]')]],
      fechaNacimiento: ['', Validators.required]
    });
    this.formInvitado.controls.dni.disable();
    this.formInvitado.controls.fechaNacimiento.disable();
  }

  public addInvitado(): void {
    this.submittedAddInvitado = true;

    if (!this.formInvitado.invalid) {
      let invitado = new Invitado();
      invitado.nombreCompleto = this.formInvitado.controls.fullname.value;
      invitado.hasAlergias = !this.formInvitado.controls.alergias && this.formInvitado.controls.alergias.value && this.formInvitado.controls.alergias.value.length > 0;
      invitado.alergiasAlimenticias = this.formInvitado.controls.alergias.value;
      invitado.hasAlojamiento = this.formInvitado.controls.hasAlojamiento.value;
      invitado.dni = this.formInvitado.controls.dni.value;
      invitado.fechaNacimiento = this.formInvitado.controls.fechaNacimiento.value;
      this.invitados.push(invitado)

      this.basicModal.hide();
      this.submittedAddInvitado = false;
      this.formInvitado.reset();
    }
  }

  public removeInvitado(invitado: Invitado) {
    const index = this.invitados.indexOf(invitado, 0);
    if (index > -1) {
      this.invitados.splice(index, 1);
    }
  }

  public closeAddInvitado(): void {
    this.submittedAddInvitado = false;
    this.basicModal.hide();
    this.formInvitado.reset();
  }

  public confirmar(): void {
    this.submittedConfirmar = true;

    if (!this.formConfirmar.invalid && this.invitados.length > 0) {
      let name: string = this.formConfirmar.controls.name.value;
      let email: string = this.formConfirmar.controls.email.value;
      let date: Date = new Date();
      let invitados = this.invitados.map((obj) => { return Object.assign({}, obj) });
      let message: string = "";

      this.invitados.forEach((invitado) => {
        message += "<br>Invitado: " + invitado.nombreCompleto + "<br>";
        if (invitado.hasAlergias) {
          message += "<br>Alergias: " + invitado.alergiasAlimenticias + "<br>";
        }                        
        if (invitado.hasAlojamiento) {
          message += "Alojamiento: Sí<br>" +
                     "DNI: " + invitado.dni + "<br>" +
                     "Fecha nacimiento: " + invitado.fechaNacimiento + "<br>";
        }else{
          message += "Alojamiento: No<br>"; 
        }
      });

      const formRequest = { name, email, date, invitados };
      this.angularFirestore.collection('confirmMessages').add(formRequest);
      this.emailService.sendConfirmacion(name, email, message, date);

      this.formConfirmar.reset();
      this.invitados.length = 0;
      this.submittedConfirmar = false;
    }
  }
}
