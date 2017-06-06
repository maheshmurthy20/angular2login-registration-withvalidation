import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';

declare var $:any;              

import { DashboardRouteModule } from './dashboard-routing.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: Http,
              private routemodule :RouterModule) { }
              show = false;  



  ngOnInit() {
    

var l2= document.getElementById("pcontact"); 

var l1= document.getElementById("scontact"); 

// if(l2.options[selectedIndex].text == l1.options[selectedIndex].text) 

// {

// l1.options[0].selected = true;

// }
    
  
  


}
}