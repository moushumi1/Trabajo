import { Component, OnInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
import { HttpClient} from '@angular/common/http';
import {any} from 'codelyzer/util/function';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
export interface User {
  id: number;
  firstName: string;
  profession: string;
  // about: string;
}

@Component({
  selector: 'app-seeker-choosing-page',
  templateUrl: './seeker-choosing-page.component.html',
  styleUrls: ['./seeker-choosing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SeekerChoosingPageComponent implements OnInit {
  user: User[];
 // user: any;
  constructor(
    private userSer:UsersServiceService,
    private http:HttpClient,
    private zone: NgZone,
    private ref: ChangeDetectorRef,
     private router: ActivatedRoute,
     private router1: Router
    ) {
 
    //this.router.params.subscribe(params => this.id =params.id)
     }
//name:string='moushumi';
  // profile: any;
  profile:any;
  id: object;
  //private profileSubscribtion: any;
  userInfo:any;
  ngOnInit() {
    this.userSer.currentMessage.subscribe(message => this.userInfo = message)

     let id1=+this.router.snapshot.params['id']
    // console.log(JSON.stringify(id+" ID"));
    // //this.viewProfile(id);
    // //or -> below code
    // this.userSer.userProfile(id1).subscribe(
    //   res => this.profile = res,
    //   err => console.log(err)
    // );
    var self = this;
    this.userSer.userProfile(id1).subscribe(
      res => {
        //return res;
        self.profile = res
        this.user=res
        console.log(JSON.stringify(this.profile))
        //self.ref.markForCheck();
       // self.ref.markForCheck();
        //self.ngOnInit();

      },
      err => console.log(err)
    );
    // console.log(JSON.stringify(this.profile));
    //return JSON.parse(this.profile);

    // var URL ="/api/users/"+7;
    // console.log(URL);
    // //return this.http.get(URL).pipe(map(res => res));
    //  this.http.get<any>(URL).subscribe(
    //     res => this.profile = res,
    //     err => console.log(err)
    //   );
    // console.log(JSON.stringify(this.profile));
      //   this.userSer.userProfile(id1).subscribe(
      // data => this.profile =data)
      //this.viewProfile(id1);

      this.ref.markForCheck();
  }


  // viewProfile(id){

  //   // this.userSer.userProfile(id).subscribe(
  //   //   res => this.profile = res,
  //   //   err => console.log(err)
  //   // );
  //   console.log(id+" -profileId");
  //   var URL = '/api/users/' + id;
  //   console.log(URL);
  //   var self = this;
  //   console.log(this.http);
  //   this.http.get<any>(URL).subscribe(
  //       res => {
  //         //return res;
  //         self.profile = res;
  //         console.log(JSON.stringify(this.profile))
  //         //self.ref.markForCheck();
  //        // self.ref.markForCheck();
  //         //self.ngOnInit();

  //       },
  //       err => console.log(err)
  //     );
  //   console.log(JSON.stringify(this.profile));

  //    setTimeout(() => {
  //      //alert(this.profile.firstName);
  //   }, 2000);

  // }
  obj:object; choosed:any;
  chooseProvider(){
    console.log(JSON.stringify(this.profile)+"7777777");
     
      this.obj= { frm: {id: this.userInfo.id},
                to: {id: this.profile.id},
			          status: "false",
                profession: this.profile.profession
               };
    this.userSer.choosingProvider(this.obj).subscribe(
      res => {
        //return res;
        this.choosed = res
        console.log('choosed provider:  '+JSON.stringify(this.choosed))
        //self.ref.markForCheck();
       // self.ref.markForCheck();
        //self.ngOnInit();
        this.router1.navigate(['/seeker_bookingPage',this.choosed.id,this.choosed.to.id]);
      },
      err => console.log(err)
    );
    console.log('------------------'+JSON.stringify(this.obj)+'------------------');
    console.log('lalalaal  '+JSON.stringify(this.choosed.id));
    
  }

}

