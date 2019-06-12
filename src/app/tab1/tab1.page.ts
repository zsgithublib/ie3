import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
// add interface

// add error tracking

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public results: any;
  public users: any;
  private aieeMembersEndpoint = 'https://randomuser.me/api/?results=30&page=3';

  constructor(
    private http: HttpClient,
    private router: Router,
    public data: DataService,
  ) {

  }

  ngOnInit() {
    this.http.get(this.aieeMembersEndpoint).subscribe(data => {
      console.log(data.results);
      this.users = data.results;
    });
  }

  getDetail(u){
    console.log('get detail', u);
    // let stuff = JSON.stringify(u);
    // this.data.getData(u);
    this.data.setData(u);
    this.router.navigateByUrl(`/userdetail/${u.name}`);
    // this.router.navigateByUrl(`/userdetail/${u.name.first}`, {user: `${u}`});
    // this.router.navigateByUrl('/userdetail');
  }



}


// bookmark user for offline storage
// view user getDetail
// google map user directions
