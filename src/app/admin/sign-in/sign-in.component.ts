import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,AbstractControl, ValidatorFn,ValidationErrors } from '@angular/forms';
import { UsersServiceService } from './../../users-service.service';
import { log } from 'util';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userSer:UsersServiceService, private router:Router) { }
  signInForm:FormGroup;
  isValidFormSubmitted: boolean = null;
  ngOnInit() {
    this.signInForm = new FormGroup({

      email: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      role: new FormGroup({
        id: new FormControl(1)
      })
    });
  }
 
   //signinURL: string = "/api/users/"+this.signInForm.get('email').value+"&/"+this.signInForm.get('password').value;

   
   exist:boolean=false;
   out;
  signIn(control: FormGroup) {
    this.isValidFormSubmitted = false;
    if(this.signInForm.invalid){
   return;	
    } 	
    // var signinURL = "/api/users/"+control.get('email')+"&/"+control.get('password');
    var signinURL ="/api/users/"+control.get('email').value+"/"+control.get('password').value+"/1";
    
    this.isValidFormSubmitted = true;	
    // TODO: Use EventEmitter with form value
    console.warn(this.signInForm.value);
    console.log(this.signInForm.value);
    console.log(signinURL);
   // console.log(this.profileForm);
    //var logIn_profile= 
    this.userSer.userSignIn(signinURL,this.signInForm.value).subscribe( data => {
      this.out=JSON.stringify(data);
      //var out="Not"
      if(this.out=='"Not"'){
        console.log('Not exist')
        console.log("OUT"+this.out)
        this.exist=true;
      }
      else{
        console.log(JSON.stringify(data))
        this.router.navigate(['admin_home'])
        this.userSer.setLoggedIn(true) 
        this.exist=false;
        console.log("OUT"+this.out)
        this.userSer.userSignInInfo(this.out);
        this.userSer.changeMessage(data)
        console.log("testing:   "+data)
      }
     });
   
  }

}
