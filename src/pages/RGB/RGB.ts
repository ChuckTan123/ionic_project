import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-RGB',
  templateUrl: 'RGB.html'
})

export class RGB {
  public light = 0;
  public color = 0;

  constructor(public navCtrl: NavController, private http: HttpClient) {
  }

  onSliderChanged() { // Add Function Callback OnSliderChange and Update Server
    var host1 = 'http://192.168.0.16:6085/color';
    var body = {
      light: this.light,
      color: this.color,
    };

    var js = JSON.stringify(body);
    this.http.post(host1, js).subscribe(
      response => {
        console.log("get a post request", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

    console.log(`Light: (${this.light}, ${this.color})`);
  }

  public colors = ['#FF0000', '#d434b7', '#4fec5f', '#770000', '#3d22e0', '#110000']; // DEFINE COLORS

  getRGB() {
    return this.colors[this.color];
  }
}
