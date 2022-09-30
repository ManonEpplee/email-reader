import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email-service.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  email: Email
  emailList: Email[]

  @ViewChild('emailForm') emailForm: any

  constructor(private emailService: EmailService, private router: Router) {
    this.email = { id: 0, from: "", to: "", subject: "", body: "" }
    this.emailList = this.emailService.getEmails()
   }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.emailService.addEmail({
      id: this.emailService.generateId(), from: this.email.from, to: this.email.to, subject: this.email.subject, body: this.email.body
    })
    window.alert(`The email "${this.email.subject}" has been sent to ${this.email.to}`)
    this.emailForm.reset()
    this.router.navigate(['/emailslist'])
  }
}
