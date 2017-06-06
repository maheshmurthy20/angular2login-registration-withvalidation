import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ForgotpasswordComponent } from './forgotpassword.component';

const routes: Routes = [

  { path: 'forgotpswd',  component: ForgotpasswordComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ForgotpasswordRouteModule {}