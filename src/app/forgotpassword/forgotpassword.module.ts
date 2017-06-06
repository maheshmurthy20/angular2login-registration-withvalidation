import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordRouteModule } from './forgotpswd-routing.module';
import { ForgotpasswordComponent } from './forgotpassword.component';

@NgModule({
  imports: [
    CommonModule,
    ForgotpasswordRouteModule,
    RouterModule

  ],
  declarations: [
    ForgotpasswordComponent
  ]
})
export class ForgotpasswordModule { }
