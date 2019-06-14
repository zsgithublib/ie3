import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { SearchPage } from './../search/search.page';



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
  public searchThis: any;

  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private http: HttpClient,
    private router: Router,
    public data: DataService,
  ) {
    this.searchThis = false;
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

  searchView(){
    this.searchThis = !this.searchThis;
    console.log(this.searchThis);
  }

  // async searchView(){
  //     console.log('go to search page');
  //
  //     const modal = await this.modalCtrl.create({
  //       component: SearchPage,
  //       // componentProps: { value: 123 }
  //     });
  //
  //     // refactor this so it doesn't clear previosu image if no new one exist
  //     modal.onDidDismiss()
  //       .then((data) => {
  //         console.log('heres what came back from the modal:', data);
  //         console.log('heres the data.data:', data.data);
  //         // if(data.data == null){
  //         //   console.log('nothing new to show');
  //         // }
  //         // else {
  //         //   this.angularForm.value.image = data.data;
  //         // }
  //       });
  //
  //     return await modal.present();
  //
  // }

  async filterList(){
    console.log('test');
    const alert = await this.alertCtrl.create({
      header: 'Filter Users',
      subHeader: 'Cool Feature',
      message: 'We should add it.',
      buttons: ['OK']
    });

    await alert.present();
  }



}


// bookmark user for offline storage
// view user getDetail
// google map user directions
