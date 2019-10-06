import { UsersServiceService } from './../../users-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,AbstractControl, ValidatorFn,ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userSer:UsersServiceService, private router:Router) { }
  
  countries:Array<String> = ['Dhaka', 'Sylhet', 'Khulna', 'Chittagong','Comilla'];

  profileForm:FormGroup;
  isValidFormSubmitted: boolean = null;
  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[\\w\\-\\s\\/]+')]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z\\s]+$')]),
      email: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      passwordRe: new FormControl('',[Validators.required,Validators.minLength(5)]),
      country: new FormControl(''),
      city: new FormControl('',Validators.required),
      countryZipcode: new FormControl('',[Validators.required,Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('^[0-9]+$')]),
      ssn: new FormControl('',[Validators.required,Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
      agreeBox:new FormControl('',  Validators.requiredTrue),
      role: new FormGroup({
        id: new FormControl(3)
      })
    }, { validators: passwordCheck/*, updateOn: 'blur' */});
  }
 

  exist:boolean=false;
  out;
  onSubmit() {
    this.isValidFormSubmitted = false;
    if(this.profileForm.invalid){
   return;	
    } 	
    this.isValidFormSubmitted = true;	
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
   // console.log(this.profileForm);
   this.userSer.createUser(this.profileForm.value).subscribe( data => {
    this.out=JSON.stringify(data);
    //var out="Not"
    if(this.out=='"User with same email Already Exists"'){
      console.log('"User with same email Already Exists"')
      console.log("OUT"+this.out)
      this.exist=true;
    }
    else{
      console.log(JSON.stringify(data))
      this.router.navigate(['signin'])
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



   const passwordCheck: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const name = control.get('password');
    const alterEgo = control.get('passwordRe');
  
    return name && alterEgo && name.value !== alterEgo.value ? { 'missMatch': true } : null;
  };