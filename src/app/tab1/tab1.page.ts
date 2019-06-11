import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// add interface

// add error tracking

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public users: any;
  private aieeMembersEndpoint = 'https://randomuser.me/api/?results=30&page=3';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get(this.aieeMembersEndpoint).subscribe(data => {
      console.log(data.results);
      this.users = data.results;
    });
  }

}
