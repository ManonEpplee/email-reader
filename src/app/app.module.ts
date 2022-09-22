import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { FormsModule } from '@angular/forms';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    EmailReaderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
