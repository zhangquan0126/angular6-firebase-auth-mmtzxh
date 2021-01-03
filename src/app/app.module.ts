import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

export const appRoutes = [
   { path: 'signin', component: SigninComponent },
   { path: 'signup', component: SignupComponent },
   { path: '', redirectTo: '/signin', pathMatch: 'full' },
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
]


@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, SignupComponent, SigninComponent, HomeComponent ],
  providers:    [ AuthService, AuthGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
