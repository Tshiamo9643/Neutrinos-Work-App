import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Module/material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { AdminPortalComponent } from './component/Admin/admin-portal/admin-portal.component';
import { AdminPolicyComponent } from './component/Admin/admin-policy/admin-policy.component';
import { AdminEmployeeComponent } from './component/Admin/admin-employee/admin-employee.component';
import { AdminSwitchAccountComponent } from './component/Admin/admin-switch-account/admin-switch-account.component';
import { AdminApproveLeaveComponent } from './component/Admin/admin-approve-leave/admin-approve-leave.component';
import { OperationPortalComponent } from './component/Operations/operation-portal/operation-portal.component';
import { OperationPickUpsComponent } from './component/Operations/operation-pick-ups/operation-pick-ups.component';
import { OperationDropoffComponent } from './component/Operations/operation-dropoff/operation-dropoff.component';
import { OperationGuesthouseComponent } from './component/Operations/operation-guesthouse/operation-guesthouse.component';
import { OperationVisaExtensionComponent } from './component/Operations/operation-visa-extension/operation-visa-extension.component';
import { OperationLeaveRequestComponent } from './component/Operations/operation-leave-request/operation-leave-request.component';
import { OperationApprovedLeaveComponent } from './component/Operations/operation-approved-leave/operation-approved-leave.component';
import { ManagerLeaveRequestComponent } from './component/Manager/manager-leave-request/manager-leave-request.component';
import { ManagerApprovedLeaveComponent } from './component/Manager/manager-approved-leave/manager-approved-leave.component';
import { ManagerVisaApplicationComponent } from './component/Manager/manager-visa-application/manager-visa-application.component';
import { EmployeePortalComponent } from './component/Employee/employee-portal/employee-portal.component';
import { EmployeeProfileComponent } from './component/Employee/employee-profile/employee-profile.component';
import { EmployeeOperationComponent } from './component/Employee/employee-operation/employee-operation.component';
import { VisaExtentionComponent } from './component/Employee/Employee-Operations/visa-extention/visa-extention.component';
import { RequestPickUpsComponent } from './component/Employee/Employee-Operations/request-pick-ups/request-pick-ups.component';
import { InternationalTravelComponent } from './component/Employee/Employee-Operations/international-travel/international-travel.component';
import { FlightInfoComponent } from './component/Employee/Employee-Operations/flight-info/flight-info.component';
import { GuesthouseServiceComponent } from './component/Employee/Employee-Operations/guesthouse-service/guesthouse-service.component';
import { DomesticTravelComponent } from './component/Employee/Employee-Operations/domestic-travel/domestic-travel.component';
import { NewUserComponent } from './component/Admin/new-user/new-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPortalComponent,
    AdminPolicyComponent,
    AdminEmployeeComponent,
    AdminSwitchAccountComponent,
    AdminApproveLeaveComponent,
    OperationPortalComponent,
    OperationPickUpsComponent,
    OperationDropoffComponent,
    OperationGuesthouseComponent,
    OperationVisaExtensionComponent,
    OperationLeaveRequestComponent,
    OperationApprovedLeaveComponent,
    ManagerLeaveRequestComponent,
    ManagerApprovedLeaveComponent,
    ManagerVisaApplicationComponent,
    EmployeePortalComponent,
    EmployeeProfileComponent,
    EmployeeOperationComponent,
    VisaExtentionComponent,
    RequestPickUpsComponent,
    InternationalTravelComponent,
    FlightInfoComponent,
    GuesthouseServiceComponent,
    DomesticTravelComponent,
    NewUserComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
