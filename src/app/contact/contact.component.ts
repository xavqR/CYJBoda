import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  submitted: Boolean = false;

  constructor(private formBuilder: FormBuilder, private angularFirestore: AngularFirestore, private emailService: EmailService) { }

  public ngOnInit(): void  {
    this.createForm();
  }

  private createForm(): void  {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  public onSubmit(): void  {
    this.submitted = true;

    if (!this.form.invalid) {
      const {name, email, message} = this.form.value;
      const date = new Date();

      const formRequest = { name, email, message, date };
      this.angularFirestore.collection('contactMessages').add(formRequest);
      this.form.reset();
      this.submitted = false;
      this.emailService.send(name, email, message, date);
    }
  }
}
