import { Component, ViewChild, ElementRef } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapView: ElementRef;

  constructor() {}

  ionViewDidEnter() {
    this.createMap();
  }

  createMap() {
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
    console.log("file: home.page.ts ~ line 21 ~ HomePage ~ createMap ~ boundingRect", boundingRect)

    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      // latitude?: number;
      // longitude?: number;
      zoom: 3,
      liteMode: false,
    })
  }

}
