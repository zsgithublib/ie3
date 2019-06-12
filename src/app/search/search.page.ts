import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  pet: any;

  constructor(
    private modalCtrl: ModalController,
  ) {
    this.pet = 'puppies';
  }

  ngOnInit() {
  }

  dismiss() {
    console.log('you hit the button to close it');
    this.modalCtrl.dismiss();
  }



}
