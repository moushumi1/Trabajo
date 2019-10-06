import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-admin-seeker',
  templateUrl: './admin-seeker.component.html',
  styleUrls: ['./admin-seeker.component.scss']
})
export class AdminSeekerComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }
  seekers=[]
  ngOnInit() {
    this.userSer.userBySeeker().subscribe(
      res => this.seekers = res,
      err => console.log(err)
    )
  }

}
