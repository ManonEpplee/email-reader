import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent implements OnInit {

  email: Email;

  constructor() {
    this.email = { id: 0, from: "", to: "", subject: "", body: "" };
   }

  ngOnInit(): void {
  }

  send(): void {
    window.alert(`This is the email you sent:
    From ${this.email.from} to ${this.email.to} with the subject "${this.email.subject}" and the body: ${this.email.body}`)
    this.clean();
  }

  clean(): void {
    this.email.from = ""
    this.email.to = ""
    this.email.subject = ""
    this.email.body = ""
  }
}
