import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
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

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public data: DataService,
  ) {

    // this.userInfo

  }

  ngOnInit() {
    this.routeInfo = this.route.snapshot.params;
    let stuff = JSON.stringify(this.routeInfo);
    console.log(stuff);
    console.log('this is routeInfo', this.routeInfo);
    this.configureMap();
    this.userInfo = this.data.getData();
    console.log(this.userInfo);
  }

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
    this.data.bookMarkTheUser(u);
  }

}

  // this.location.coordinates.latitude;
  // this.location.coordinates.longitude;
