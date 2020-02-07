import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private logService: LoginService) { }

  userI: User[];
  
  ngOnInit() {
    
  }

  logIN(userEmail:string, password:string){

    if(this.logService.checkPassword(userEmail,password)) {
      alert('Your Logged in');
    } 
    else {
      alert('Please try again');
    }
    
  }


}
