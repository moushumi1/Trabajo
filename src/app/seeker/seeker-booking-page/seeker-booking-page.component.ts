import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seeker-booking-page',
  templateUrl: './seeker-booking-page.component.html',
  styleUrls: ['./seeker-booking-page.component.scss']
})
export class SeekerBookingPageComponent implements OnInit {
  userInfo:any;
  constructor(
    private userSer:UsersServiceService,
    private router: ActivatedRoute,
    private router1: Router
  ) { }
   mapId; seekerId;
   profile:object;
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

  obj:object;
  bookProvider(){
    //console.log(JSON.stringify(this.profile)+"7777777");
     
      this.obj= {
        frm:{ 
            id:this.userInfo.id
            
          },
              to:{ 
              id:this.seekerId
            
          },
          status:"true",
          //profession:"something",
         // cerateDate:"10-10-2010",
         // endDate:"10-12-2010"
      };
    this.userSer.bookingProvider(this.mapId,this.obj);
    console.log('------------------'+JSON.stringify(this.obj)+'------------------');
    console.log('lalalaal');
    this.router1.navigate(['/seeker_transaction',this.mapId,this.seekerId]);
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
 