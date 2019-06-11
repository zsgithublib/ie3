import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(

  ) {

  }

  ngOnInit(){
    this.routeInfo = this.route.snapshot.params;
    console.log('this is routeInfo', this.routeInfo);
    // this.itemId = this.route.snapshot.paramMap.get('id');
    // console.log('this is the itemId: ', this.itemId);
  }

}
