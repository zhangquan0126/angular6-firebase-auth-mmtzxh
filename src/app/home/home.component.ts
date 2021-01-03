import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { User } from './model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  logout() {
    localStorage.removeItem('loggedIn');
  }
}