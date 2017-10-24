import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextGamePage } from '../next-game/next-game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoPageNextGame() {
  	this.navCtrl.push(NextGamePage)
  }

}
