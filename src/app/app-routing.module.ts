import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailFormComponent } from './email-form/email-form.component';

const routes: Routes = [
  { path: 'emailreaderbasic', component: EmailReaderBasicComponent },
  { path: 'emailreaderform', component: EmailReaderFormComponent },
  { path: 'emailslist', component: EmailsListComponent },
  { path: 'emailviewer/:id', component: EmailViewerComponent },
  { path: 'emailform', component: EmailFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
