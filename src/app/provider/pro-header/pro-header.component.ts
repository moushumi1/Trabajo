import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-pro-header',
  templateUrl: './pro-header.component.html',
  styleUrls: ['./pro-header.component.scss']
})
export class ProHeaderComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }
  userInfo:any;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)
    console.log("header: "+this.userInfo);
  }

  

}
 