import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 import { EqualValidator } from './forgotpassword/password.match.directive';
// import { NotEqualValidator } from './register/contact.match.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    EqualValidator,
    

    
        
  ],
  imports: [                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
