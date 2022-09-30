import { Component, OnInit } from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email-service.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  email: Email
  emailList: Email[]
  filterTerm: string
  withBody: boolean

  constructor(private emailService: EmailService) {
    this.email = { id: 0, from: "", to: "", subject: "", body: "" }
    this.emailList = this.emailService.getEmails()
    this.filterTerm = ""
    this.withBody = false
   }

  ngOnInit(): void {
  }

  deleteEmail(id: number): void {
    this.emailService.deleteEmail(id)
  }
}
