import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,AbstractControl, ValidatorFn,ValidationErrors, FormBuilder } from '@angular/forms';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  constructor(private userSer:UsersServiceService, private fb: FormBuilder) { }
  
  countries:Array<String> = ['Dhaka', 'Sylhet', 'Khulna', 'Chittagong','Comilla'];

  profileForm:FormGroup;
  isValidFormSubmitted: boolean = null;
  userInfo:any;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    //   this.profileForm = this.fb.group({
    //   firstName: ['',Validators.required,Validators.minLength(3),Validators.pattern('[\\w\\-\\s\\/]+')],
    //   lastName: ['',Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z\\s]+$')],
    //   email: ['',Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')],
    //   password: ['',Validators.required,Validators.minLength(5)],
    //   passwordRe: ['',Validators.required],
    //   country: [''],
    //   city: ['',Validators.required],
    //   zipCode: ['',Validators.required,Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('^[0-9]+$')],
    //   ssn: ['',Validators.required,Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]+$')],
    //   agreeBox:['',  Validators.requiredTrue],
    //   role: this.fb.group({
    //     id: [1]
    //   })
    // }, { validators: passwordCheck/*, updateOn: 'blur' */});
    




    this.profileForm = new FormGroup({
      id: new FormControl(this.userInfo.id),
      firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z\\s]+$')]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z\\s]+$')]),
      email: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]),
      // password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      // passwordRe: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      contactNo: new FormControl(''),
      dob: new FormControl('',Validators.required),
      profession: new FormControl(''),
      interest: new FormControl(''),
      experince: new FormControl(''),
      priceRate: new FormControl(''),
      address: new FormControl('',Validators.required),
      country: new FormControl(''),
      city: new FormControl('',Validators.required),
      countryZipcode: new FormControl('',[Validators.required,Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('^[0-9]+$')]),
      ssn: new FormControl('',[Validators.required,Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
     // image: new FormControl(''),
      role: new FormGroup({
        id: new FormControl(1)
      })
    }, { validators:[passwordCheck]/*, updateOn: 'blur' */});
    console.log(this.userInfo)
    this.profileForm.patchValue(this.userInfo);
  }
 


  onSubmit() {
    this.isValidFormSubmitted = false;
    if(this.profileForm.invalid){
   return;	
    } 	
    this.isValidFormSubmitted = true;	
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
   // console.log(this.profileForm);
   //this.userSer.createUser(this.profileForm.value);
   console.log(this.profileForm.value+"---------admin pro: ----------");
   this.userSer.updateUser(this.userInfo.id,this.profileForm.value);
   this.userSer.changeMessage(this.profileForm.value);
  }

}
const passwordCheck: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('password');
  const alterEgo = control.get('passwordRe');

  return name && alterEgo && name.value !== alterEgo.value ? { 'missMatch': true } : null;
};


// const dateValidator: ValidatorFn = (c: FormGroup): ValidationErrors | null => {
//   if ((c.get('dob').value !== undefined && c.get('dob').value !== '' && c.get('dob').value != null)) {

//       var month = null;
//       var day = null;
//       var year = null;
//       console.log('moushumi');
//       console.log(c.get('dob').value);
//       //var currentTaxYear = Number(new Date().getFullYear() - 1);

//       if (c.get('dob').value.indexOf('-') > -1) {
//         var res = c.get('dob').value.split("-");           
//         if (res.length > 1) {
//             year = res[0];
//             month = res[1]
//             day = res[2];
//         }    
//         console.log(year);                          
//     }
//     else {

//           if (c.get('dob').value.length == 8) {
//               year = c.get('dob').value.substring(0, 2);
//               month = c.get('dob').value.substring(2, 4);
//               day = c.get('dob').value.substring(4, 8);
//               console.log("2nd: "+year);
//           }  
//         }          
      
//       if (isNaN(month) || isNaN(day) || isNaN(year)) {
//           return { 'dateInvalid': true };
//       } 
//       month = Number(month);
//       day = Number(day);
//       year = Number(year);
//       if (month < 1 || month > 12) { // check month range
//         console.log("month: "+month);
//           return { 'dateInvalid': true };
//       }
//       if (day < 1 || day > 31) {
//         console.log("day: "+day);
//           return { 'dateInvalid': true };
//       }
//       if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
//         console.log("day2: "+day);
//           return { 'dateInvalid': true };
//       }
//       if (month == 2) { // check for february 29th
//         console.log("day2: "+day);
//           var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
//           if (day > 29 || (day === 29 && !isleap)) {
//               return { 'dateInvalid': true };
//           }
//       }
//       // if (year !== currentTaxYear) {
//       //     return { 'dateYearGreaterThanTaxYear': true };
//       // }

//       if (year >2000 || year<1960 ) {
//         console.log("year: "+year);
//         return { 'dateInvalid': true };
//     }
//   }
//   return null;
// };