import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the NextGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next-game',
  templateUrl: 'next-game.html',
})
export class NextGamePage {

  private url:string = "http://api.football-data.org/v1/teams/"; // Url da Api
  public all: Array<{}>;
  public idcompetition = '/fixtures'; //Lista de acessórios em um conjunto de competições.
  public idTeam =  1779; // Id do Time

 

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public http: Http
    ) {
    

      this.http.get(this.url + this.idTeam + this.idcompetition)
        .map(res => res.json())
        .subscribe(data => {
          // this.all = data;
          console.log(data);
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextGamePage');
  }

}
