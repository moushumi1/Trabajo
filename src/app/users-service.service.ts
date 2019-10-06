import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  firstName: string;
  profession: string;
  // about: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }

  private loggedInStatus=false;

  userInfo:any;

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message) {
    
    this.messageSource.next(message)
    console.log("message: "+message);
  }
  createUser(user):any {

    //var userBody="firstName=" + user.firstname + "&lastName=" + user.lastName + "&email=" + user.email+ "firstName=" + user.firstname +;

  //   this.http.post("/api/users/create",
  //  user).subscribe(
  //           (val) => {
  //               console.log("POST call successful value returned in body", 
  //                           val);
  //           },
  //           response => {
  //               console.log("POST call in error", response);
  //           },
            
  //           () => {
  //               console.log("The POST observable is now completed.");
  //           });



           return this.http.post('/api/users/create', user);
            //.subscribe(status=> console.log(JSON.stringify(status)))
    }

    updateUser(userid,user):any {
            console.log(user);
            this.http.put('/api/users/'+userid+'/edit', user).subscribe(status=> console.log(JSON.stringify(status)));
    }

    userSignInInfo(temp):any{
          this.userInfo=temp;
          console.log(this.userInfo);
    }

    collectInfo():any{
      console.log(this.userInfo);
      return this.userInfo;
    }

  // createUser(user):any {

  //   this.http.post("/api/users/create",
  //   {
  //     "firstName":"trisha",
  //     "lastName":"Islam",
  //     "email":"r@yahoo.com",
  //     "gender":"male",
  //     "address":"gulshan",
  //     "city":"dhaka",
  //     "password":"123"
  //   }).subscribe(
  //           (val) => {
  //               console.log("POST call successful value returned in body", 
  //                           val);
  //           },
  //           response => {
  //               console.log("POST call in error", response);
  //           },
  //           () => {
  //               console.log("The POST observable is now completed.");
  //           });
  //   }

  userSignIn(signinURL,user):any {

    return this.http.get(signinURL);
    //.subscribe(status=> console.log(JSON.stringify(status)))

  }

  ///////////////////////////////////////////////////////////////////////////////////////////////
  //    logical funtions and search engine ///////////////
  ///////////////////////////////////

  userByRole(){
    return this.http.get<any>("/api/users/searchByRole ");
  }

  userBySeeker(){
    return this.http.get<any>("/api/users/searchSeeker");
  }

  userByProvider(){
    return this.http.get<any>("/api/users/searchProvider");
  }
 /// - for admin
  choosedProvider(){
    return this.http.get<any>("/api/services/serviceType/0");
  }

   /// - for admin
   bookedProvider(){
    return this.http.get<any>("/api/users/searchSeeker");
  }

  // userProfile(id){
  //   var URL ="/api/users/"+id;
  //   console.log(URL);
  //   console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
  //   //return this.http.get(URL).pipe(map(res => res));
  //   //return this.http.get<any>(URL);
  //   return this.http.get("/api/users/"+id);
  // }

  // userProfile(id){
  //   return this.http.get<any>('/api/users/'+id);
  // }
  userProfile(id):Observable<User[]>{
    return this.http.get<any>('/api/users/'+id);
  }
  
///choose proviser : seeker-choosing-page
  choosingProvider(provider){
    console.log("service:"+ JSON.stringify(provider));
    return this.http.post('/api/services/create', provider);
  }
///book proviser : seeker-booking-page
  bookingProvider(seekerid,info){
    console.log("bookingService:"+ JSON.stringify(info));
    var url='/api/services/'+seekerid+'/booked';
    console.log(url);
    this.http.put(url, info).subscribe(status=> console.log(JSON.stringify(status)));
  }

/// Seeker's choosed list:   seeker_choosedList
 choosedList(seekerid){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/services/getBySeeker/'+seekerid;
  console.log(url);
  return this.http.get<any>(url);
}

/// messaging-page:   seeker_bookingPage
messages(senderId,receiverId){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/messages/fetchMessage/'+senderId+'/'+receiverId;
  console.log(url);
  return this.http.get<any>(url);
}

///post message: seeker_bookingPage
postText(text){
  console.log("service:"+ JSON.stringify(text));
  return this.http.post('/api/messages/create', text).subscribe(status=> console.log(JSON.stringify(status)));;
}

//transaction
transaction(transaction):any {
  console.log("transaction : "+JSON.stringify(transaction));
  this.http.post('/api/transaction', transaction).subscribe(status=> console.log(JSON.stringify(status)));
}

//transaction list to be approved by admin

adminTransApprovalList(){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/payment';
  console.log(url);
  return this.http.get<any>(url);
}

//admin aprrove transaction
adminTransApprove(transId){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/payment/'+transId;
  console.log(url);
  return this.http.get<any>(url).subscribe(status=> console.log(JSON.stringify(status)));;
}

//admin: list of tranastion approved
adminTransApproved(){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/payment/approved';
  console.log(url);
  return this.http.get<any>(url);
}
//seeker: list of provider from approved list=seeker review-list
approveListOfProviders(seekerId){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/payment/approved/seeker/'+seekerId;
  console.log(url);
  return this.http.get<any>(url);
}
//seeker: review - post
reviewPost(review):any {
  console.log("transaction : "+JSON.stringify(review));
  this.http.post('/api/review',review).subscribe(status=> console.log(JSON.stringify(status)));
}
//provider: review-list from seeker
providersReviewList(providerId){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/review/'+providerId;
  console.log(url);
  return this.http.get<any>(url);
}
//seeker: delete provider from choose-list
deleteProvider(serviceMapId){
  console.log("servicemap: "+JSON.stringify(serviceMapId));
  var url='/api/services/delete/'+serviceMapId;
  this.http.delete(url).subscribe(status=> console.log(JSON.stringify(status)));
}
/// provider's all list:   provider_home
serviceAllList(providerId){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/services/getByProvider/'+providerId;
  console.log(url);
  return this.http.get<any>(url);
}

serviChoosedList(providerId){
  //console.log("bookingService:"+ JSON.stringify(info));
  var url='/api/services/getChooseListByProvider/'+providerId;
  console.log(url);
  return this.http.get<any>(url);
}

}




