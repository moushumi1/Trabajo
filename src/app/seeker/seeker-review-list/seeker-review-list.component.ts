import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from './../../users-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seeker-review-list',
  templateUrl: './seeker-review-list.component.html',
  styleUrls: ['./seeker-review-list.component.scss']
})
export class SeekerReviewListComponent implements OnInit {

  constructor(private userSer: UsersServiceService, private router: Router) { }

  providers = [];
  profileId;
  userInfo:any;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    this.userSer.approveListOfProviders(this.userInfo.id).subscribe(
      res => this.providers = res,
      err => console.log(err)
    );
  }

  goReview(profilePos) {
    console.log('tttt'+profilePos); 
    this.profileId = this.providers[profilePos].to.id;
   console.log(this.profileId);
    console.log(profilePos);  

    this.router.navigate(['/seeker_reviewPage',this.profileId]);

  }

}
//   /seeker_reviewPage riview route