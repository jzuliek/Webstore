import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLogin: User [] = [{

    firstName: 'johnny',
    lastName: 'uribe',
    userEmail: 'jzuliek@gmail.com',
    passWord: '123456',
    
  }]

  constructor() { }
}
