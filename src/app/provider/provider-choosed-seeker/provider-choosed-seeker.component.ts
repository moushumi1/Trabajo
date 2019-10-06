import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from './../../users-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-provider-choosed-seeker',
  templateUrl: './provider-choosed-seeker.component.html',
  styleUrls: ['./provider-choosed-seeker.component.scss']
})
export class ProviderChoosedSeekerComponent implements OnInit {

  constructor(private userSer: UsersServiceService, private router: Router) { }
  seekers = [];
  userInfo:any;

  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    console.log("header: "+this.userInfo);
    this.userSer.serviChoosedList(this.userInfo.id).subscribe(
      res => this.seekers = res,
      err => console.log(err)
    );
  }

  profileId;seekerId;

  goProfile(profilePos){
    this.profileId = this.seekers[profilePos].id;
    this.seekerId= this.seekers[profilePos].frm.id;
    console.log(this.profileId);
    console.log(profilePos);

    this.router.navigate(['/provider_booking_page/',this.profileId,this.seekerId]);
  }

}

///provider_booking_page
