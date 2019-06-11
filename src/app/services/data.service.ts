import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  bookMarkedUsers:any;
  constructor() {
    this.bookMarkedUsers = [];
  }

  setData(data) {
    console.log('setting data');
    this.data = data;
  }

  getData() {
    // console.log('test');
    // console.log(this.data);
    return this.data;
  }

  bookMarkTheUser(user){
    this.bookMarkedUsers.push(user);
    console.log(this.bookMarkedUsers);
  }

}
