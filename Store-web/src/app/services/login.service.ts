import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    userLogin: User [] = []

  constructor() { }
  
  checkPassword(uEmail: string, password: string): boolean {
    //this.loggedInUser.userName = userName;
    //return userName === this.userPasswords[0].userName ? (password === this.userPasswords[0].password ? true : false) : false;

    let result = false;
    if(uEmail === this.userLogin[0].userEmail){
      if(password === this.userLogin[0].passWord){
        result = true;
      }
    }

    return result;
  }

  checkifEmailUsed(userEmail:string): boolean{
    //search for userName
    let result = false;
    if(this.userLogin.find(x => userEmail.toLowerCase() === x.userEmail) !== undefined){
      result = true;
    }
    return result;
  }

  addUser(userAccount:User){

    
    this.userLogin.push(userAccount);

    //localStorage.setItem('users', JSON.stringify(this.userLogin));
    console.log(this.userLogin);
  }


}
