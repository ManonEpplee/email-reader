import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email-service.service';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit {

  email: Email

  ngOnInit(): void {
  }

  constructor(private emailService: EmailService, @Inject(ActivatedRoute) private route : ActivatedRoute) {
    this.email = emailService.getEmail(Number(this.route.snapshot.paramMap.get('id')))
  }
}
