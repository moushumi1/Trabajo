import { Component, OnInit ,ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
import { HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-seeker-booked-list',
  templateUrl: './seeker-booked-list.component.html',
  styleUrls: ['./seeker-booked-list.component.scss']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeekerBookedListComponent implements OnInit {
  // userInfo:any;
  // profile=[];
  // id: object;
  // constructor(
  //   private userSer:UsersServiceService,
  //   private http:HttpClient,
  //   private ref: ChangeDetectorRef,
  //   private router: ActivatedRoute) { }
    

  // ngOnInit() {
  //   this.userSer.currentMessage.subscribe(message => this.userInfo = message) 
  //   let id1=+this.router.snapshot.params['id']
  //   //this.viewProviderList(this.userInfo.id) seekerBookedList

  //     //this.ref.markForCheck();
  //     //console.log(id+" -profileId");
  //     this.userSer.currentMessage.subscribe(message => this.userInfo = message)
  //     console.log("header: "+this.userInfo);
  //     this.userSer.seekerBookedList(this.userInfo.id).subscribe(
  //       res => this.profile = res,
  //       err => console.log(err)
  //     );

  // }
  providers = [];
  profileId;seekerId;
  userInfo:any;
  constructor(private userSer: UsersServiceService) {
  }

  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    console.log("header: "+this.userInfo);
    this.userSer.choosedList(this.userInfo.id).subscribe(
            res => {
              this.providers = res;
              console.log(JSON.stringify(this.providers))
            },
            err => console.log(err)
          );
  }

  // viewProviderList(id){
 

  //   console.log(id+" -profileId");
  //   var URL = '/api/services/getBookListByProvider/'+ id;
  //   console.log(URL);
  //   var self = this;
  //   console.log(this.http);
  //   this.http.get<any>(URL).subscribe(
  //       res => {
  //         self.profile = res;
  //         console.log(JSON.stringify(this.profile))
  //       },
  //       err => console.log(err)
  //     );
  //   console.log(JSON.stringify(this.profile));
  // }

}
