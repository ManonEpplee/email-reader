import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';

@Pipe({
  name: 'withbodyFilter'
})
export class WithbodyFilterPipe implements PipeTransform {

  transform(emailList: Email[], withBody: boolean): Email[]{
    if (withBody)
      return emailList.filter(email => (email.body != null));
    else
      return emailList;
  }

}
