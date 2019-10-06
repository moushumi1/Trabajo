import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl,Validators,AbstractControl, ValidatorFn,ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-seeker-review',
  templateUrl: './seeker-review.component.html',
  styleUrls: ['./seeker-review.component.scss']
})
export class SeekerReviewComponent implements OnInit {

  profile:any;
  id: object;
  userInfo:any;
  constructor(
    private userSer:UsersServiceService,
    private router: ActivatedRoute
  ) { }

  reviewForm:FormGroup;

  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    let seekerId=+this.router.snapshot.params['id']

    this.reviewForm = new FormGroup({
      frm: new FormGroup({
        id: new FormControl(this.userInfo.id)
      }),
      to: new FormGroup({
        id: new FormControl(seekerId)
      }),
      review: new FormControl(''),
      rating: new FormControl('0')
    })
  }

  reviewSubmit(){
    console.warn(this.reviewForm.value);
    this.userSer.reviewPost(this.reviewForm.value);
  }

}
