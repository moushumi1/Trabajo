//import {SeekerChoosingPageComponent} from './../seeker-choosing-page/seeker-choosing-page.component';
import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from './../../users-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seeker-home',
  templateUrl: './seeker-home.component.html',
  styleUrls: ['./seeker-home.component.scss'],
 // providers: [SeekerChoosingPageComponent]
})
export class SeekerHomeComponent implements OnInit {

  providers = [];
  profileId;
  //, private profile: SeekerChoosingPageComponent
  constructor(private userSer: UsersServiceService, private router: Router) {
  }

  ngOnInit() {
    this.userSer.userByProvider().subscribe(
      res => this.providers = res,
      err => console.log(err)
    );

     //console.log(JSON.stringify(this.providers))
    //   console.log(this.providers.length)
    //   for (let i of this.providers) {
    //     console.log(i); //
    //     console.log(this.providers[0].firstName);
    //  }
  }

  goProfile(profilePos) {
     this.profileId = this.providers[profilePos].id;
    console.log(this.profileId);
     console.log(profilePos);
    // this.profile.viewProfile(this.profileId);
    // this.router.navigate(['seeker_choosePage']);
    //console.log(JSON.stringify(this.providers))
    //   console.log(this.providers.length)
    //  this.profileId=this.providers[profilePos].id;
    //  console.log(this.profileId);
    //  console.log(profilePos);
    //  this.profile.viewProfile(this.profileId);
    //   for (let i of this.providers) {
    //     console.log(i); //
    //     console.log(this.providers[0].firstName);
    //     console.log(this.temper);
    //  }

    this.router.navigate(['/seeker_choosePage',this.profileId]);

  }

  profilePage() {

  }


}
