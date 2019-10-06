import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-seeker-header',
  templateUrl: './seeker-header.component.html',
  styleUrls: ['./seeker-header.component.scss']
})
export class SeekerHeaderComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }
  userInfo:any;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    console.log("header: "+this.userInfo);
  }

}
