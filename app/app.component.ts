import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCzIs_p4RTVz2SSv1BBFi-zUBN6BGiir4Y",
      authDomain: "ng-recipe-book-cf050.firebaseapp.com",
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
