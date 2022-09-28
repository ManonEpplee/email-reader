import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  email: Email
  emailList: Email[]

  constructor() {
    this.email = { id: 0, from: "", to: "", subject: "", body: "" }
    this.emailList = [
      { id: 1, from: "sender1@upm.es", to: "receiver1@upm.es", subject: "University", body: "Please change my subjects!" },
      { id: 2, from: "sender2@upm.es", to: "receiver2@upm.es", subject: "Submit NOW!"},
      { id: 3, from: "sender3@upm.es", to: "receiver3@upm.es", subject: "Information", body: "Classes will start at 3pm today" }
    ]
  }

  generateId() {
    let max = 0;
    this.emailList.forEach(email => {
      if (email.id > max) {
        max = email.id;
      }
    });
    return max + 1;
  }

  addEmail(email: Email): void {
    this.emailList.push(email);
  }

  getEmails(): Email[] {
    console.log(this.emailList)
    return this.emailList ;
  }

  getEmail(id: number): Email {
    return this.emailList.filter(email => email.id === id)[0];
  }

  deleteEmail(id: number): Email[] {
    const index = this.emailList.findIndex(email => email.id === id);
    return this.emailList.splice(index, 1)
  }
}
