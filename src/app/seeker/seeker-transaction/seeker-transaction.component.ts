import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl,Validators,AbstractControl, ValidatorFn,ValidationErrors, FormBuilder,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seeker-transaction',
  templateUrl: './seeker-transaction.component.html',
  styleUrls: ['./seeker-transaction.component.scss']
})
export class SeekerTransactionComponent implements OnInit {

  constructor(
    private userSer:UsersServiceService,
    private router: ActivatedRoute,
  ) { }
  userInfo:any;mapId; seekerId;profile:any;isValidFormSubmitted: boolean = null;total:number;
  transactionForm:FormGroup;

  //public bookHour="";
  

  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    this.mapId=+this.router.snapshot.params['id']
    this.seekerId=+this.router.snapshot.params['seekerId']

    var self = this;
    this.userSer.userProfile(this.seekerId).subscribe(
      res => {
        //return res;
        self.profile = res
        console.log(JSON.stringify(this.profile))
        //self.ref.markForCheck();
       // self.ref.markForCheck();
        //self.ngOnInit();

      },
      err => console.log(err)
    );

    

    this.transactionForm = new FormGroup({
      frm: new FormGroup({
        id: new FormControl(this.userInfo.id)//this.userInfo.id
      }),
      to: new FormGroup({
        id: new FormControl(this.seekerId)//this.seekerId
      }),
      serviceId: new FormGroup({
        id: new FormControl(this.mapId)//this.mapId
      }),
      transactionConNo: new FormControl('',[Validators.required,Validators.pattern('^(\\+88|0088)?0{1}1{1}[0-9]{9}$')]),
      transactionId:new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
      totalAmount:new FormControl(''),
      hour:new FormControl('',Validators.required),
      status:new FormControl('false'),
      cerateDate: new FormControl('',Validators.required),
      endDate: new FormControl('',Validators.required)
    });

    //this.transactionForm.patchValue({totalAmount:this.total});
  }
  update(event:any){

    console.log(" total hour: "+this.transactionForm.get('hour').value);
    this.total=this.transactionForm.get('hour').value* this.profile.priceRate;
    this.transactionForm.patchValue({totalAmount:this.total});
  }
  onSubmit() {
    this.isValidFormSubmitted = false;
    if(this.transactionForm.invalid){
   return;	
    } 	
    this.isValidFormSubmitted = true;	
    this.userSer.transaction(this.transactionForm.value);
  }

}
