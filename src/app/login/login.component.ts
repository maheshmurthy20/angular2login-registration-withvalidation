import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRouteModule } from './login-routing.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http,
              private routemodule :RouterModule,
                            private router: Router,) { }

  ngOnInit() {
  }
users=[];
  login(){
    // this.http.post('http://api/users/create',
    JSON.stringify(this.users);
    console.log(this.users);
    this.router.navigateByUrl('/dashboard');
    };
}
