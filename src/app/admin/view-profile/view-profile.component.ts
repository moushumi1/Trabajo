import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }
  userInfo:any;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    console.log("header: "+this.userInfo);
  } 

}
