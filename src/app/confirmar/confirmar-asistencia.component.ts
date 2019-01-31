import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirmar-asistencia.component.html',
  styleUrls: ['./confirmar-asistencia.component.scss']
})
export class ConfirmarAsistenciaComponent implements OnInit {
  private formConfirmar: FormGroup;
  private formInvitado: FormGroup;
  private submittedConfirmar: Boolean = false;
  private submittedAddInvitado: Boolean = false;

  constructor(private formBuilder: FormBuilder, private angularFirestore: AngularFirestore) { }

  public ngOnInit() {
    this.createForms();
  }

  private createForms(): void  {
    this.formConfirmar = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],      
    });
    this.formInvitado = this.formBuilder.group({
      fullname: ['', Validators.required],
      alergias:[],       
    });
  }

  public onAddInvitado(): void  {
    console.log("add invitado");
  }


  public onConfirmar(): void  {
    console.log("confimar");
    this.submittedConfirmar = true;

    if (!this.formConfirmar.invalid) {
      const {name, email, message} = this.formConfirmar.value;
      const date = new Date();

      const formRequest = { name, email, message, date };
      // this.angularFirestore.collection('contactMessages').add(formRequest);
      this.formConfirmar.reset();
      this.submittedConfirmar = false;
      // this.emailService.send(name, email, message, date);
    }
  }
}
