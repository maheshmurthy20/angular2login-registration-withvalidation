import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
 {path: '',component:RegisterComponent,pathMatch:'full'},
 { path: 'login',  component: LoginComponent }, 
{ path: 'register',  component: RegisterComponent },
{ path: 'forgotpswd',  component: ForgotpasswordComponent}, 
{ path: 'dashboard',  component: DashboardComponent}
  




];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule {}