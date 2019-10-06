import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  constructor(private userSer:UsersServiceService) { }
  allUsers=[]
  name=null;city=null;profession=null;check:boolean=false;list:boolean=true;
  ngOnInit() {
    this.userSer.userByRole().subscribe(
      res => this.allUsers = res,
      err => console.log(err)
    )
  }
  searchResult(info){
    this.check=true;
    this.list=false;
    this.name=info.name;
    this.city=info.city;
    this.profession=info.profession;
    console.log("home name = " + info.name); 
    console.log("home city = " + info.city);
    console.log("home profession = " + info.profession);
  }

}
