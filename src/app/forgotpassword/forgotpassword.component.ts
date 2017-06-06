import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Router} from '@angular/router';
import { Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { ForgotpasswordRouteModule } from './forgotpswd-routing.module'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private http: Http,
              private routemodule :RouterModule,
              private router: Router,) { }

  ngOnInit() {
  }
  data=[];
  reset(){
    // this.http.post('http://api/users/create',
    JSON.stringify(this.data);
    console.log(this.data);
    this.router.navigateByUrl('/login');
    };

}
