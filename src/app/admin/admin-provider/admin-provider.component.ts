import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-admin-provider',
  templateUrl: './admin-provider.component.html',
  styleUrls: ['./admin-provider.component.scss']
})
export class AdminProviderComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }
  providers=[]
  ngOnInit() {
    this.userSer.userByProvider().subscribe(
      res => this.providers = res,
      err => console.log(err)
    )
  }

}
