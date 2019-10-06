import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';

@Component({
  selector: 'app-admin-tran-update',
  templateUrl: './admin-tran-update.component.html',
  styleUrls: ['./admin-tran-update.component.scss']
})
export class AdminTranUpdateComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }

  allUsers=[]; 

  ngOnInit() {
    this.userSer.adminTransApprovalList().subscribe(
      res => this.allUsers = res,
      err => console.log(err)
    )
  }

  approveTrans(transId){
    console.log('trans id: '+transId)
    this.userSer.adminTransApprove(transId);
  }
  
}
 