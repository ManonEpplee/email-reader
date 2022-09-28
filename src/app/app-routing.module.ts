import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';

const routes: Routes = [
  { path: 'emailreaderbasic', component: EmailReaderBasicComponent },
  { path: 'emailreaderform', component: EmailReaderFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
