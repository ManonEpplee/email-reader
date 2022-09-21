import { Component } from '@angular/core';
import { Email } from './interfaces/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-reader';
  email: Email;

  constructor() {
    this.email = {from: "", to: "", subject: "", body: ""}
   }

  ngOnInit(): void {
  }

  clean(): void {
    this.email.from = ""
    this.email.to = ""
    this.email.subject = ""
    this.email.body = ""
  }
}
