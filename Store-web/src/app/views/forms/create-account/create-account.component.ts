import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private logService: LoginService) { }

  ngOnInit() {
  }
  signUp(fName: string, lName: string, emailU: string, passWord: string, cpw: string) {
    //check if email is confirmed

    //check if password is confirmed
    if (passWord === cpw && passWord.length > 3) {
      //check to see if user name is taken
      if (this.logService.checkifEmailUsed(emailU)) {
        alert('user name already exist')
      }
      else {
        let addthisName: User = {
          firstName: fName,
          lastName: lName,
          userEmail: emailU,
          passWord: passWord,
        }
        //send entire object to be added to userPasswords
        this.logService.addUser(addthisName);
      }
    }
    else {
      alert('password no match')
    }


  }

}
