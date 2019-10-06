import { AuthGuard } from './auth.guard';
import { UsersServiceService } from './users-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './before-log/signin/signin.component';
import { SignupComponent } from './before-log/signup/signup.component';
import { NavBarComponent } from './before-log/nav-bar/nav-bar.component';
import { HomeComponent } from './before-log/home/home.component';
import { HomeHeaderComponent } from './before-log/home-header/home-header.component';

import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminSearchbarComponent } from './admin/admin-searchbar/admin-searchbar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewProfileComponent } from './admin/view-profile/view-profile.component';
import { UpdateProfileComponent } from './admin/update-profile/update-profile.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AdminProviderComponent } from './admin/admin-provider/admin-provider.component';
import { AdminSeekerComponent } from './admin/admin-seeker/admin-seeker.component';
import { AdminProBookedComponent } from './admin/admin-pro-booked/admin-pro-booked.component';
import { AdminProChoosedComponent } from './admin/admin-pro-choosed/admin-pro-choosed.component';
import { AdminUserProfileComponent } from './admin/admin-user-profile/admin-user-profile.component';
import { AdminTranUpdateComponent } from './admin/admin-tran-update/admin-tran-update.component';
import { AdminTransactionComponent } from './admin/admin-transaction/admin-transaction.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';

import { ProviderSigninComponent } from './provider/provider-signin/provider-signin.component';
import { ProSidebarComponent } from './provider/pro-sidebar/pro-sidebar.component';
import { ProHeaderComponent } from './provider/pro-header/pro-header.component';
import { ProSearchbarComponent } from './provider/pro-searchbar/pro-searchbar.component';
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
import { SeekerChoosedListComponent } from './seeker/seeker-choosed-list/seeker-choosed-list.component';
import { SeekerBookedListComponent } from './seeker/seeker-booked-list/seeker-booked-list.component';
import { SeekerUpdateProComponent } from './seeker/seeker-update-pro/seeker-update-pro.component';
import { SeekerViewProComponent } from './seeker/seeker-view-pro/seeker-view-pro.component';
import { SeekerChoosingPageComponent } from './seeker/seeker-choosing-page/seeker-choosing-page.component';
import { SeekerBookingPageComponent } from './seeker/seeker-booking-page/seeker-booking-page.component';
import { SeekerTransactionComponent } from './seeker/seeker-transaction/seeker-transaction.component';
import { SeekerReviewComponent } from './seeker/seeker-review/seeker-review.component';
import { SeekerHeaderComponent } from './seeker/seeker-header/seeker-header.component';
import { SeekerSidebarComponent } from './seeker/seeker-sidebar/seeker-sidebar.component';
import { SeekerSearchbarComponent } from './seeker/seeker-searchbar/seeker-searchbar.component';
import { SeekerReviewListComponent } from './seeker/seeker-review-list/seeker-review-list.component';
import { SeekerTranUpdateComponent } from './seeker/seeker-tran-update/seeker-tran-update.component';
import { AdminsearchPipe } from './admin/admin-home/adminsearch.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavBarComponent,
    HomeComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminSearchbarComponent,
    AdminHomeComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    AddAdminComponent,
    AdminProviderComponent,
    AdminSeekerComponent,
    AdminProBookedComponent,
    AdminProChoosedComponent,
    SignInComponent,
    ProviderSigninComponent,
    SeekerSigninComponent,
    HomeHeaderComponent,
    ProSidebarComponent,
    ProHeaderComponent,
    ProSearchbarComponent,
    ProHomeComponent,
    PViewProfileComponent,
    SeekerHomeComponent,
    SeekerChoosedListComponent,
    SeekerBookedListComponent,
    SeekerUpdateProComponent,
    SeekerViewProComponent,
    SeekerChoosingPageComponent,
    SeekerBookingPageComponent,
    SeekerTransactionComponent,
    SeekerReviewComponent,
    SeekerHeaderComponent,
    SeekerSidebarComponent,
    SeekerSearchbarComponent,
    SeekerReviewListComponent,
    SeekerTranUpdateComponent,
    AdminUserProfileComponent,
    AdminTranUpdateComponent,
    ProviderUpdateProfileComponent,
    ProviderReviewComponent,
    ProviderTranUpdateComponent,
    ProviderTransactionComponent,
    ProviderBookedSeekerComponent,
    ProviderChoosedSeekerComponent,
    ProviderReviewPageComponent,
    ProviderSeekerProfileComponent,
    AdminTransactionComponent,
    ProviderBookingPageComponent,
    AdminsearchPipe,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
