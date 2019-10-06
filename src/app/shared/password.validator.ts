import { AbstractControl } from '@angular/forms';

export const passwordValidator=(control: AbstractControl): { [key: string]: boolean } | null=> {

    const password =control.get('password');
    const passwordRe =control.get('passwordRe');
  
    // return ( password  && passwordRe  && password.value !== passwordRe.value) ?
    //      { 'misMatch': true }: null;
    return { 'misMatch':true};
  }