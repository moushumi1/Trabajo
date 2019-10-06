import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './before-log/home/home.component';
import { SigninComponent } from './before-log/signin/signin.component';
import { SignupComponent } from './before-log/signup/signup.component';

import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewProfileComponent } from './admin/view-profile/view-profile.component';
import { UpdateProfileComponent } from './admin/update-profile/update-profile.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AdminProviderComponent } from './admin/admin-provider/admin-provider.component';
import { AdminSeekerComponent } from './admin/admin-seeker/admin-seeker.component';
import { AdminProBookedComponent } from './admin/admin-pro-booked/admin-pro-booked.component';
import { AdminProChoosedComponent } from './admin/admin-pro-choosed/admin-pro-choosed.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { AdminUserProfileComponent } from './admin/admin-user-profile/admin-user-profile.component';
import { AdminTranUpdateComponent } from './admin/admin-tran-update/admin-tran-update.component';
import { AdminTransactionComponent } from './admin/admin-transaction/admin-transaction.component';


import { ProviderSigninComponent } from './provider/provider-signin/provider-signin.component';
import { ProHomeComponent } from './provider/pro-home/pro-home.component';
import { PViewProfileComponent } from './provider/p-view-profile/p-view-profile.component';
import { ProviderUpdateProfileComponent } from './provider/provider-update-profile/provider-update-profile.component';
import { ProviderReviewComponent } from './provider/provider-review/provider-review.component';
import { ProviderTranUpdateComponent } from './provider/provider-tran-update/provider-tran-update.component';
import { ProviderTransactionComponent } from './provider/provider-transaction/provider-transaction.component';
import { ProviderBookedSeekerComponent } from './provider/provider-booked-seeker/provider-booked-seeker.component';
import { ProviderChoosedSeekerComponent } from './provider/provider-choosed-seeker/provider-choosed-seeker.component';
import { ProviderReviewPageComponent } from './provider/provider-review-page/provider-review-page.component';
import { ProviderSeekerProfileComponent } from './provider/provider-seeker-profile/provider-seeker-profile.component';
import { ProviderBookingPageComponent } from './provider/provider-booking-page/provider-booking-page.component';


import { SeekerSigninComponent } from './seeker/seeker-signin/seeker-signin.component';
import { SeekerHomeComponent } from './seeker/seeker-home/seeker-home.component';
import { SeekerBookedListComponent } from './seeker/seeker-booked-list/seeker-booked-list.component';
import { SeekerBookingPageComponent } from './seeker/seeker-booking-page/seeker-booking-page.component';
import { SeekerChoosedListComponent } from './seeker/seeker-choosed-list/seeker-choosed-list.component';
import { SeekerChoosingPageComponent } from './seeker/seeker-choosing-page/seeker-choosing-page.component';
import { SeekerReviewComponent } from './seeker/seeker-review/seeker-review.component';
import { SeekerReviewListComponent } from './seeker/seeker-review-list/seeker-review-list.component';
import { SeekerTransactionComponent } from './seeker/seeker-transaction/seeker-transaction.component';
import { SeekerTranUpdateComponent } from './seeker/seeker-tran-update/seeker-tran-update.component';
import { SeekerUpdateProComponent } from './seeker/seeker-update-pro/seeker-update-pro.component';
import { SeekerViewProComponent } from './seeker/seeker-view-pro/seeker-view-pro.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },

  { 
    path: 'home', 
    component: HomeComponent 
  },

  { 
    path: 'signin', 
    component: SigninComponent 
  },

  { 
    path: 'signup', 
    component: SignupComponent 
  },



  { 
    path: 'admin_home', 
    component: AdminHomeComponent 
  },

  { 
    path: 'admin_signin', 
    component: SignInComponent 
  },

  { 
    path: 'admin_provider', 
    component: AdminProviderComponent 
  },

  { 
    path: 'admin_seeker', 
    component: AdminSeekerComponent 
  },

  { 
    path: 'admin_pro_booked', 
    component: AdminProBookedComponent 
  },

  { 
    path: 'admin_pro_choosed', 
    component: AdminProChoosedComponent 
  },

  {
    path: 'add_admin',
    component: AddAdminComponent
  },

  { 
    path: 'admin_update_profile', 
    component: UpdateProfileComponent 
  },

  { 
    path: 'admin_view_profile', 
    component: ViewProfileComponent 
  },

  { 
    path: 'admin_user_profile', 
    component: AdminUserProfileComponent 
  },

  { 
    path: 'admin_tran_update', 
    component: AdminTranUpdateComponent 
  },

  {
    path: 'admin_transaction',
    component: AdminTransactionComponent
  },


  

  { 
    path: 'provider_signin', 
    component: ProviderSigninComponent 
  },

  { 
    path: 'provider_home', 
    component: ProHomeComponent,
    canActivate : [AuthGuard] 
  },

  { 
    path: 'provider_view_profile', 
    component: PViewProfileComponent 
  },

  { 
    path: 'provider_update_profile', 
    component: ProviderUpdateProfileComponent 
  },

  { 
    path: 'provider_review_list', 
    component: ProviderReviewComponent 
  },

  { 
    path: 'provider_tran_update', 
    component: ProviderTranUpdateComponent 
  },

  { 
    path: 'provider_transaction', 
    component: ProviderTransactionComponent 
  },

  { 
    path: 'provider_booked_seeker', 
    component: ProviderBookedSeekerComponent 
  },

  { 
    path: 'provider_choosed_seeker', 
    component: ProviderChoosedSeekerComponent 
  },

  { 
    path: 'provider_review_page', 
    component: ProviderReviewPageComponent 
  },

  { 
    path: 'provider_seeker_profile', 
    component: ProviderSeekerProfileComponent 
  },

  {
    path: 'provider_booking_page/:id/:seekerId',
    component: ProviderBookingPageComponent
  },




  { 
    path: 'seeker_signin', 
    component: SeekerSigninComponent 
  },

  { 
    path: 'seeker_home', 
    component: SeekerHomeComponent 
  },

  { 
    path: 'seeker_bookedList', 
    component: SeekerBookedListComponent 
  },

  { 
    path: 'seeker_bookingPage/:id/:seekerId', 
    component: SeekerBookingPageComponent 
  },

  { 
    path: 'seeker_choosedList', 
    component: SeekerChoosedListComponent 
  },

  { 
    path: 'seeker_choosePage/:id', 
    component: SeekerChoosingPageComponent 
  },

  { 
    path: 'seeker_reviewPage/:id', 
    component: SeekerReviewComponent 
  },

  { 
    path: 'seeker_reviewList', 
    component: SeekerReviewListComponent
  },

  { 
    path: 'seeker_transaction/:id/:seekerId', 
    component: SeekerTransactionComponent 
  },

  { 
    path: 'seeker_tran_update', 
    component: SeekerTranUpdateComponent 
  },

  { 
    path: 'seeker_update_profile', 
    component: SeekerUpdateProComponent 
  },

  { 
    path: 'seeker_view_profile', 
    component: SeekerViewProComponent 
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
