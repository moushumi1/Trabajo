import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-admin-pro-choosed',
  templateUrl: './admin-pro-choosed.component.html',
  styleUrls: ['./admin-pro-choosed.component.scss']
})
export class AdminProChoosedComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }
  providers=[];
  ngOnInit() {
    this.userSer.choosedProvider().subscribe(
      res => {
        //return res;
        this.providers = res
      
        console.log(JSON.stringify(this.providers))
        //self.ref.markForCheck();
       // self.ref.markForCheck();
        //self.ngOnInit();

      },
      err => console.log(err)
    )
    console.log(JSON.stringify(this.providers));
  }
  
 
}
