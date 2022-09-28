import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email-service.service';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email
  emailList: Email[]
  @ViewChild('emailForm') emailForm: any

  constructor(private emailService: EmailService) {
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
  }

  deleteEmail(id: number): void {
    this.emailService.deleteEmail(id)
  }
}
