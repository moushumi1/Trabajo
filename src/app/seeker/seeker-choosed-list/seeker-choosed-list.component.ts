import {SeekerChoosingPageComponent} from './../seeker-choosing-page/seeker-choosing-page.component';
import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from './../../users-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seeker-choosed-list',
  templateUrl: './seeker-choosed-list.component.html',
  styleUrls: ['./seeker-choosed-list.component.scss']
})
export class SeekerChoosedListComponent implements OnInit {
  providers = [];
  profileId;seekerId;
  userInfo:any;
  constructor(private userSer: UsersServiceService, private router: Router) {
  }

  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    console.log("header: "+this.userInfo);
    this.userSer.choosedList(this.userInfo.id).subscribe(
      res => this.providers = res,
      err => console.log(err)
    );
  }

  goBooking(profilePos) {
    this.profileId = this.providers[profilePos].id;
    this.seekerId= this.providers[profilePos].to.id;
    console.log(this.profileId);
    console.log(profilePos);

    this.router.navigate(['/seeker_bookingPage',this.profileId,this.seekerId]);
  }

  removeProvider(mapid){
    this.profileId = this.providers[mapid].id;
    this.userSer.deleteProvider( this.profileId);
  }

}
