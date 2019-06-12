import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import { SearchPage } from './../search/search.page';
// Google maps <script> is loaded in main index.html
declare var google: any;


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})
export class UserdetailPage implements OnInit {
  // @ViewChild('map') mapElement: ElementRef;
  @ViewChild('mapCanvas') mapElement: ElementRef;

  // Google Map references
  map: any;
  locationMarkers: any;
  currentLocationMarker: any;
  lastLocation: any;
  stationaryRadiusCircle: any;
  polyline: any;
  geofenceMarkers: any;
  section: any;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public data: DataService,
    private modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastController: ToastController,
  ) {

    // this.userInfo
    this.section = "info";
  }

  ngOnInit() {
    // this.routeInfo = this.route.snapshot.params;
    // let stuff = JSON.stringify(this.routeInfo);
    // console.log(stuff);
    // console.log('this is routeInfo', this.routeInfo);

    this.userInfo = this.data.getData();
    console.log(this.userInfo);
    // this.configureMap();
  }

  async shareInfo(u) {
    console.log(u);
    const alert = await this.alertCtrl.create({
      header: 'Share',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bookmarked User',
      duration: 2000
    });
    toast.present();
  }

  searchView(){

  }

  //
  // shareInfo(u){
  //   console.log(u);
  // }

  private configureMap() {
  /**
  * Configure Google Maps
  */

  let latLng = new google.maps.LatLng(-34.9290, 138.6010);

  let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: false,
    mapTypeControl: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    disableDefaultUI: true
  };

  let mapEle = this.mapElement.nativeElement;


  this.map = new google.maps.Map(mapEle, {

    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,

  });
  }

  bookMarkEm(u){
    this.presentToast();
    this.data.bookMarkTheUser(u);
  }

  async searchView(){
      console.log('go to search page');

      const modal = await this.modalCtrl.create({
        component: SearchPage,
        // componentProps: { value: 123 }
      });

      // refactor this so it doesn't clear previosu image if no new one exist
      modal.onDidDismiss()
        .then((data) => {
          console.log('heres what came back from the modal:', data);
          console.log('heres the data.data:', data.data);
          // if(data.data == null){
          //   console.log('nothing new to show');
          // }
          // else {
          //   this.angularForm.value.image = data.data;
          // }
        });

      return await modal.present();

  }

}

  // this.location.coordinates.latitude;
  // this.location.coordinates.longitude;
