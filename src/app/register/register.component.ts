import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterRouteModule } from './register-routing.module';
import {Router} from '@angular/router';
import { Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: Http,
              private routemodule :RouterModule,
              private router: Router,) { }

  ngOnInit() {
  }
user=[];
  register(){
    // this.http.post('http://api/users/create',
    JSON.stringify(this.user);
    console.log(this.user);
    
     this.router.navigateByUrl('/login');
    };

    addcontact(){
      
       document.getElementById('secondarycontact').style.display='inline'
    }

}
