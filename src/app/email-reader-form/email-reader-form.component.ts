import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email
  emailList: {to: string, subject: string}[]
  @ViewChild('emailForm') emailForm: any

  constructor() {
    this.email = { from: "", to: "", subject: "", body: "" }
    this.emailList = []
   }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.emailList?.push({ to: this.email.to, subject: this.email.subject })
    window.alert(`The email "${this.email.subject}" has been sent to ${this.email.to}`)
    this.emailForm.reset()
  }
}
