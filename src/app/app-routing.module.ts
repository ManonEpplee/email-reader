import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';

const routes: Routes = [
  { path: 'email-reader-basic', component: EmailReaderBasicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
