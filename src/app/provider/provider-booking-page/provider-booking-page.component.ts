import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-provider-booking-page',
  templateUrl: './provider-booking-page.component.html',
  styleUrls: ['./provider-booking-page.component.scss']
})
export class ProviderBookingPageComponent implements OnInit {

  constructor(
    private userSer:UsersServiceService,
    private router: ActivatedRoute,
  ) { }

  userInfo:any;seekerId;profile:object;mapId;

  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    this.mapId=+this.router.snapshot.params['id']
    this.seekerId=+this.router.snapshot.params['seekerId']
    this.userSer.messages(this.userInfo.id,this.seekerId).subscribe(
      res => {
        //return res;
        this.profile = res
        console.log('messages: '+JSON.stringify(this.profile))
        //self.ref.markForCheck();
       // self.ref.markForCheck();
        //self.ngOnInit();

      },
      err => console.log(err)
    );
  }
  text:object;
  sentMessage(reply){
    console.log('users reply:  '+reply);
    this.text={
      "frm": {
        "id": this.userInfo.id
      },
      "to": {
        "id": this.seekerId
      },
      "map": {
        "id": this.mapId
      },
      "messageText":reply
    }

    this.userSer.postText(this.text);
  }

}
