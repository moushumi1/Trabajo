import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pro-home',
  templateUrl: './pro-home.component.html',
  styleUrls: ['./pro-home.component.scss']
})
export class ProHomeComponent implements OnInit {

  constructor(
    private userSer:UsersServiceService,
    private router: Router
  ) { }
  userInfo:any;
  seekerList:object;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    var self = this;
    this.userSer.serviceAllList(this.userInfo.id).subscribe(
      res => {
        self.seekerList = res
        console.log(JSON.stringify(this.seekerList))
      },
      err => console.log(err)
    );
  }
  // profileId;
  // goProfile(profilePos) { 
  //   this.profileId = this.seekerList[profilePos].frm.id;
  //   console.log(this.profileId);
  //   console.log(profilePos);
  //   this.router.navigate(['/provider_seeker_profile',this.profileId]);

  // }

}

//  /provider_seeker_profile