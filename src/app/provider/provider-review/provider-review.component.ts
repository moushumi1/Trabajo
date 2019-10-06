import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from './../../users-service.service';

@Component({
  selector: 'app-provider-review',
  templateUrl: './provider-review.component.html',
  styleUrls: ['./provider-review.component.scss']
})
export class ProviderReviewComponent implements OnInit {

  constructor(private userSer: UsersServiceService) { }
  reviewList = [];
  userInfo:any;

  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    this.userSer.providersReviewList(this.userInfo.id).subscribe(
      res => this.reviewList = res,
      err => console.log(err)
    );
  }

}
