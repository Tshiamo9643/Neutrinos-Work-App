import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AdminPortalComponent } from './component/Admin/admin-portal/admin-portal.component';
import { AdminPolicyComponent } from './component/Admin/admin-policy/admin-policy.component';
import { AdminApproveLeaveComponent } from './component/Admin/admin-approve-leave/admin-approve-leave.component';
import { NewUserComponent } from './component/Admin/new-user/new-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin-portal', component: AdminPortalComponent, 
  children:[{path:'add-policy', component:AdminPolicyComponent},
            {path:'approved-leave', component:AdminApproveLeaveComponent},
            {path:'add-user',component:NewUserComponent}
          ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
