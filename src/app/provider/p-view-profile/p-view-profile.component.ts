import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
@Component({
  selector: 'app-p-view-profile',
  templateUrl: './p-view-profile.component.html',
  styleUrls: ['./p-view-profile.component.scss']
})
export class PViewProfileComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }
  userInfo:any;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    console.log("header: "+this.userInfo);
  }
}
 