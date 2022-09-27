import { Component, Input, OnInit } from '@angular/core';
import { data } from 'jquery';
import * as L from 'leaflet';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';
import { ApiService } from '../../services/api-services/api.service';
import { DataSessionService } from '../../services/data-session-service/data-session.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit {
  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: '../../../assets/marker-icon.png',
      shadowUrl: '../../../assets/marker-shadow.png'
    })
  };

  private map: L.Map;
  private centroid: L.LatLngExpression; //
  @Input() address : string;
  @Input() city : string;

  private async initMap(): Promise<void> {

    let dataAddress = await this.dataSessionService.GetLatLonFromAddress(this.address,this.city);
    console.log(dataAddress);
    var lat = 0;
    var lon = 0;
    var i =0;
    while(dataAddress[i]){
      if((dataAddress[i]["display_name"]).toString().toLowerCase().includes(this.city.toLowerCase())){
        lat = dataAddress[i]["lat"];
        lon = dataAddress[i]["lon"];
      }
      i++;
    }
    
    
    this.centroid = [lat,lon];
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 18
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    
        
      var x = L.marker(this.centroid as L.LatLngExpression,this.icon)
      x.addTo(this.map)
      //.bindPopup('Ionic 4 <br> Leaflet.')
      //.openPopup();
    
    
    tiles.addTo(this.map);
      
      
  }

  
  constructor(private dataSessionService :DataSessionService) { }

  ngOnInit(): void {
    this.initMap();
  }

}