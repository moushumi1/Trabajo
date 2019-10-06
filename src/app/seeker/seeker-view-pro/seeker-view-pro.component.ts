import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
@Component({
  selector: 'app-seeker-view-pro',
  templateUrl: './seeker-view-pro.component.html',
  styleUrls: ['./seeker-view-pro.component.scss']
})
export class SeekerViewProComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }
  userInfo:any;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    console.log("header: "+this.userInfo);
  }

}
