import { 
  Component, 
  OnInit, 
  ViewChild 
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  error: string;

  constructor( private authService: AuthService ) { 
    this.error = null;
  }

  ngOnInit() {
  }

  onSignUp() {
    console.log(this.form)
    this.authService.signUpUser(this.form.value.email, this.form.value.password)
      .then( res => console.log(res) )
      .catch( err => this.error = err.message );
    this.form.reset();
  }

  removeError() {
    this.error = null;
  }
}